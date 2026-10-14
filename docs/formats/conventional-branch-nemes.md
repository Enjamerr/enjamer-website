# Branch Naming Convention — Developers

## Format

```text
<developer-username>-<descriptive-branch-name>
```

## Rule

Every branch created by a developer must contain the username followed by a hyphen (`-`) and the description of the work being performed.

Branch names must be written without spaces, lowercase and using hyphens to separate words.

## Exception

Our initial integration into the repository is determined by the username specified in the corresponding `commit-authors.yml` file; for this reason, the first branch created by a developer must follow this format:

```text
<developer-username>-adding-new-identity
```

Esto es necesario para que el sistema de control de versiones pueda identificar correctamente al desarrollador y asociar su identidad con los cambios realizados en el repositorio.

## Explanation

This convention makes it possible to quickly identify **what is being developed** and **who is responsible for the branch**.

**Example:** `jperezatenjamer-implement-user-login`
