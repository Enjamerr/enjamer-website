# ENJAMER-TEMPLATE-CODE

**Official Project Templates — Enjamer**

## Overview

ENJAMER-TEMPLATE-CODE is the official repository of development templates maintained by **Enjamer**.

Its purpose is to standardize the initial configuration of software projects, providing a consistent foundation for development, collaboration, code quality, and continuous integration.

Instead of configuring every new repository from scratch, developers can start with a predefined template containing the tools, conventions, and validations established by Enjamer.

This repository is intended for internal use and serves as a centralized starting point for new development projects.

## Objectives

- Standardize the initial structure of software projects.
- Reduce repetitive configuration work.
- Establish consistent development conventions.
- Integrate automated code quality checks.
- Validate commits, branches, and developer identities.
- Facilitate collaboration between team members.
- Maintain reusable configurations for different technologies.

## Available Templates

The repository is organized to support multiple development technologies.

| Template | Technology | Description |
|---|---|---|
| `react-js` | React + JavaScript + Vite | React application with JavaScript and automated validations. |
| `react-ts` | React + TypeScript | Reserved for React projects using TypeScript. |
| `angular-ts` | Angular + TypeScript | Reserved for Angular projects using TypeScript. |
| Ando other templates | Various | Reserved for future development templates. |

## Repository Structure

```text
enjamer-template-code/
├── init.py
├── README.md
├── docs/
│   └── conventional-commits.md
├── scripts/
└── templates/
    ├── react-js/
    ├── react-ts/
    ├── angular-js/
    └── angular-ts/
```

### Main components

**`init.py`**

Initialization script responsible for preparing a newly created repository using the selected technology.

**`templates/`**

Contains the development templates and their technology-specific configurations.

**`docs/`**

Contains documentation related to development conventions and internal standards.

**`scripts/`**

Contains supporting scripts used by the template infrastructure.

## Creating a New Project

### 1. Create a repository from the template

Open the ENJAMER-TEMPLATE-CODE repository on GitHub:

[Enjamer Template Code](https://github.com/Enjamerr/enjamer-template-code)

Select **Use this template → Create a new repository**.

Choose the repository name, visibility, and appropriate organization.

### 2. Clone the new repository

```bash
  git clone git@github.com:Enjamerr/REPOSITORY-NAME.git
```

Enter the repository:

```bash
  cd REPOSITORY-NAME
```

### 3. Initialize the project

Run the initialization script:

```bash
  python3 init.py
```

Select the desired technology and follow the instructions displayed in the terminal.

The initialization process prepares the selected project structure and removes template infrastructure that is not required by the generated application.

**Important:** Run `init.py` in the newly created repository, not in the original ENJAMER-TEMPLATE-CODE repository.

### 4. Install dependencies

For Node.js-based projects:

```bash
npm ci
```

## Development Standards

Enjamer templates may include predefined configurations for:

- ESLint — Static code analysis.
- Prettier — Consistent code formatting.
- Commitlint — Commit message conventions.
- GitHub Actions — Continuous integration.
- Developer identity validation.
- Branch naming validation.
- Production build verification.

Each technology template defines the tools and commands appropriate for its development environment.

## Template Maintenance

Changes to this repository can affect the configuration used by future projects.

When modifying a template:

- Keep changes specific to the corresponding technology.
- Verify that configuration files remain functional.
- Test the initialization process.
- Validate the generated project.
- Update the relevant documentation.
- Submit changes through the established review process.

Changes made to ENJAMER-TEMPLATE-CODE do not automatically update repositories that were previously generated from it.

## Repository Scope

ENJAMER-TEMPLATE-CODE is a template management repository, not an application intended for direct deployment.

Application development should take place in repositories created from the appropriate template.

The original repository should remain focused on maintaining reusable project foundations, shared conventions, and initialization infrastructure.

---

**Maintained by Enjamer**

Internal development infrastructure and project standardization.
