import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import YAML from 'yaml';

const [branch, base, head] = process.argv.slice(2);

if (!branch || !base || !head) {
  console.error('Usage: node scripts/validate-branch.js BRANCH BASE HEAD');
  process.exit(1);
}

const { authors } = YAML.parse(
  readFileSync(new URL('../commit-authors.yml', import.meta.url), 'utf8'),
);

if (!Array.isArray(authors) || authors.length === 0) {
  console.error('ERROR: No registered authors found.');
  process.exit(1);
}

if (branch === 'adding-new-identity') {
  const subjects = execFileSync('git', ['log', '--format=%s', `${base}..${head}`], {
    encoding: 'utf8',
  })
    .trim()
    .split('\n')
    .filter(Boolean);

  if (
    subjects.length === 0 ||
    !subjects.every((subject) => /^chore\(identity\): .+/.test(subject))
  ) {
    console.error('ERROR: The adding-new-identity branch only accepts chore(identity) commits.');
    process.exit(1);
  }

  console.log('Identity registration branch: human review required.');
  process.exit(0);
}

const usernames = authors.map((author) => author.username);

const username = usernames.find(
  (name) => typeof name === 'string' && branch.startsWith(`${name}-`),
);

if (!username) {
  console.error(`ERROR: Unregistered username in branch "${branch}".`);
  process.exit(1);
}

const description = branch.slice(username.length + 1);

if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(description)) {
  console.error('ERROR: Invalid branch description.');
  process.exit(1);
}

console.log(`Valid branch: ${branch}`);
