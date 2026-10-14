import fs from 'node:fs';
import YAML from 'yaml';

const { types, scopes } = YAML.parse(
  fs.readFileSync(new URL('./commit-rules.yml', import.meta.url), 'utf8'),
);

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types],
    'scope-enum': [2, 'always', scopes],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100],
  },
};