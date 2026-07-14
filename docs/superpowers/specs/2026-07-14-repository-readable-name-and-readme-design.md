# Repository readable name and README design

## Goal

Improve the readability of the GitHub repository that hosts the tw93 and Matt Pocock skills search page.

The repository should be renamed from `ACaiA-77.github.io` to `tw93-matt-skills-guide`, matching the source guide filename and topic. A detailed `README.md` should explain what the repository is and how to use it.

## Decisions

- Rename the GitHub repository to `tw93-matt-skills-guide`.
- Rename the local working directory to `tw93-matt-skills-guide` after the remote rename is complete.
- Update the Git remote URL to `https://github.com/ACaiA-77/tw93-matt-skills-guide.git`.
- Accept that the GitHub Pages URL changes from the personal root site to the project site: `https://acaia-77.github.io/tw93-matt-skills-guide/`.
- Add a repository `README.md` with Chinese documentation.

## README contents

The README should cover:

1. What the repository is: a static searchable Chinese guide for public AI coding skills from tw93 and Matt Pocock.
2. Online usage: link to the deployed GitHub Pages site and describe the search/detail workflow.
3. Data sources: tw93/Waza, tw93/Kami, and mattpocock/skills.
4. Included data: 48 reviewed skills, stored in `data/skills.json`, with the human-readable source guide in `sources/tw93-matt-skills-guide.md`.
5. Local preview: run a simple static HTTP server and open the local URL.
6. Maintenance: update `data/skills.json` and `sources/tw93-matt-skills-guide.md`, then verify with `node --test`.
7. Deployment: GitHub Actions deploys the static site to GitHub Pages on push to `main`.

## Non-goals

- Do not introduce a build system or third-party dependencies.
- Do not add analytics, backend services, authentication, or runtime upstream fetching.
- Do not change the existing skills data unless necessary for URL/path correctness after the rename.

## Verification

- `node --test tests/search.test.mjs` passes.
- GitHub Actions Pages deployment succeeds after pushing to the renamed repository.
- The project Pages URL loads 48 skills and search still works.
- README links point to the renamed repository and project Pages URL.
