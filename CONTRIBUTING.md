# Contributing Guide – AtelierA!

Thank you for contributing to the **AtelierA** project!
This document defines the technical collaboration rules for the DevOps team.

---

## Branch Rules

- The `main` branch is **protected** → no direct commits.
- Any new feature or bug fix must be done on a **dedicated branch**.

### Branch Naming Convention:

| Branch Type | Example | Description |
|-------------|---------|-------------|
| `feat/` | `feat/add-authentication` | New feature |
| `fix/` | `fix/bug-command` | Bug fix |
| `docs/` | `docs/update-readme` | Documentation |
| `test/` | `test/add-unit-tests` | Add or modify tests |
| `chore/` | `chore/code-cleanup` | Maintenance, configuration, etc. |

---

## PR / MR Workflow

The contribution process for the **AtelierA** project follows these steps:

1. **Create a new branch** from `main`
   → Name the branch according to the convention (`feat/`, `fix/`, etc.)

2. **Develop the feature or fix** on this branch.

3. **Make a commit** following the convention below:
   `<type>: <short description>`

Example:
feat: add collective order module

4. **Push the branch** to the remote repository:
   ```
   git push origin branch-name
   ```

5. **Open a Pull Request (PR)** (or Merge Request (MR)) to the `main` branch.

6. **Have the PR/MR reviewed** by another team member before merging.

7. Once the review is validated and tests pass, **merge** the branch into `main`.

**Workflow Summary:**
Create branch → Commit → Push → Open PR/MR → Review → Merge

---

## Commit Conventions

We follow the **Conventional Commits** format for clear and consistent messages:

`<type>: <short description>`

**Examples:**
feat: add collective order module
fix: fix restaurant display bug
docs: update installation guide
test: add unit tests for API
chore: remove temporary files

---

## Code Review Checklist

During a code review, verify that:

- [ ] Branch name follows the convention
- [ ] Commits are clear and well-named
- [ ] Code is readable and coherent
- [ ] Tests are present and pass successfully
- [ ] No useless or secret files are committed
- [ ] Documentation is updated if necessary

---

## Definition of Ready (DoR)

A **user story** is ready when it:

- Has **clear acceptance criteria**
- Has all dependencies identified
- Has the necessary **mockups** or specifications
- Is **small enough** to be completed in one sprint

---

## Definition of Done (DoD)

A **user story** is done when it:

- Meets all acceptance criteria
- Is **tested and validated** by the team
- Has been **reviewed and merged** into `main`
- Introduces **no regression**
- Has updated documentation

---

Thank you for contributing to **AtelierA!** Your rigor ensures project quality and smooth collaboration.
