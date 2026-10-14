# Commit Convention — ENJAMER-TEMPLATE-CODE

## Format

```text
type(scope): short description

- Detailed description of the change.
```

The detailed description is optional. The short description is mandatory.

## Project Scopes

- `init`: changes to the project initialization script, including template selection, file copying, and cleanup.
- `template-{name}`: changes limited to a specific technology template. Replace `{name}` with the template identifier, such as `react-js`, `react-ts`, `django`, `angular`, `springboot`, etc.
- `multiple`: changes affecting multiple technology templates or project components.
- `config`: general repository or tool configuration.
- `deps`: dependencies and package management.
- `docs`: project documentation.
- `ci`: GitHub Actions workflows, automated checks, and continuous integration.
- `all`: changes affecting the entire template repository.

## Types

### Feature

```text
feat(scope): add new functionality

- Description of the new functionality.
```

### Fix

```text
fix(scope): fix an error

- Description of the corrected behavior.
```

### Refactor

Use this type for internal improvements that do not change existing behavior.

```text
refactor(scope): improve internal code without changing behavior

- Description of the internal improvement.
```

### Documentation

```text
docs(docs): update project documentation

- Description of the documentation change.
```

### Styles

Use this type only for formatting changes that do not modify behavior.

```text
style(scope): update code formatting

- Description of the formatting change.
```

### Continuous Integration

Use this type for changes to GitHub Actions workflows and automated validation processes.

```text
ci(ci): add automated commit validation

- Description of the workflow or validation change.
```

### Build

Use this type for changes to build tools, build configuration, or packaging processes.

```text
build(scope): update build configuration

- Description of the build-related change.
```

### Chore

Use this type for maintenance tasks that do not introduce functionality or modify application behavior.

```text
chore(scope): reorganize project structure

- Description of the maintenance change.
```

## General Rules

- Commit messages must be written in English.
- Types and scopes must use lowercase letters.
- The short description must clearly explain the change.
- The short description must not end with a period.
- Each commit should represent one logical change.
- Generic messages such as `update`, `changes`, or `fix stuff` are not allowed.
- The commit header must not exceed 100 characters.
- All commits submitted through Pull Requests must follow this convention.

## Examples

```text
feat(init): add interactive template selection
feat(template-react-js): create initial React template
feat(template-django): add Django project structure
fix(init): prevent accidental file overwriting
refactor(init): simplify template discovery
docs(docs): document initialization process
style(template-react-js): format source files
ci(ci): add pull request validation workflow
build(template-react-js): update Vite build configuration
chore(multiple): reorganize template directories
```
