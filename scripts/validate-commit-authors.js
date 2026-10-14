import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import YAML from 'yaml';

const [base, head] = process.argv.slice(2);

if (!base || !head) {
  console.error('Use: node scripts/validate-commit-authors.js BASE HEAD');
  process.exit(1);
}

const { authors } = YAML.parse(
  readFileSync(new URL('../commit-authors.yml', import.meta.url), 'utf8'),
);

if (!Array.isArray(authors)) {
  throw new Error('commit-authors.yml must contain an authors list.');
}

const identities = new Set();

for (const author of authors) {
  if (!author.username || !author.email) {
    throw new Error('There is an incomplete identity in commit-authors.yml.');
  }

  const identity = `${author.username}\0${author.email}`;

  if (identities.has(identity)) {
    throw new Error(`Duplicate identity: ${author.username}`);
  }

  identities.add(identity);
}

const output = execFileSync('git', ['log', '--format=%H%x00%an%x00%ae%x00%s', `${base}..${head}`], {
  encoding: 'utf8',
});

let errors = 0;
let skipped = 0;

for (const line of output.split('\n').filter(Boolean)) {
  const [sha, username, email, subject] = line.split('\0');

  // Exception: human review
  if (/^chore\(identity\): .+/.test(subject)) {
    console.log(`HUMAN REVIEW: ${sha.slice(0, 7)} - ${subject}`);
    skipped++;
    continue;
  }

  const identity = `${username}\0${email}`;

  if (!identities.has(identity)) {
    console.error(`ERROR ${sha.slice(0, 7)}: unauthorized author: ${username} <${email}>`);
    errors++;
  }
}

console.log(`Commits with human review: ${skipped}`);

if (errors > 0) {
  process.exit(1);
}

console.log('Automatic author validation completed.');
