# Identity Registration

Developers who are not yet registered in `commit-authors.yml` must use the special branch:

```text
  adding-new-identity
```

In `commit-authors.yml`, the new developer's identity must be added with the following format:

```yaml
authors:
  - name: 'John Doe Pérez Martínez'
    username: 'jperezatenjamer'
    email: 'jdperezm@enjamer.com'
```

# Branch

This branch is reserved exclusively for identity registration.

All commits in this branch must follow the format:

```bash
  chore(identity): add new developer
```

The branch validator rejects `adding-new-identity` if it contains commits with other types or scopes.

Automatic author validation is skipped for these identity-registration commits.

**Important:** Identity registration requires human review. Passing automated validation does not constitute approval of the new developer.
