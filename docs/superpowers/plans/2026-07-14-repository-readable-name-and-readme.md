# Repository Readable Name And README Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename the GitHub repository to `tw93-matt-skills-guide`, update local/remote references, and add a detailed Chinese README explaining the project and usage.

**Architecture:** This remains a dependency-free static GitHub Pages site. The only content change is a repository-level README; deployment continues through the existing GitHub Pages Actions workflow. Repository metadata and local directory naming are changed outside source code, while links in documentation point to the new project Pages URL.

**Tech Stack:** Static HTML/CSS/JavaScript, JSON data, Node built-in test runner, GitHub Pages Actions.

## Global Constraints

- Rename the GitHub repository to `tw93-matt-skills-guide`.
- Rename the local working directory to `tw93-matt-skills-guide` after the remote rename is complete.
- Update the Git remote URL to `https://github.com/ACaiA-77/tw93-matt-skills-guide.git`.
- Accept that the GitHub Pages URL changes to `https://acaia-77.github.io/tw93-matt-skills-guide/`.
- Add a Chinese `README.md`.
- Do not introduce a build system or third-party dependencies.
- Do not add analytics, backend services, authentication, or runtime upstream fetching.
- Do not change existing skills data unless necessary for URL/path correctness after the rename.
- Verify with `node --test tests/search.test.mjs`.

---

### Task 1: Add README documentation

**Files:**
- Create: `README.md`
- Read: `sources/tw93-matt-skills-guide.md`
- Read: `data/skills.json`

**Interfaces:**
- Consumes: existing project structure and the confirmed project Pages URL `https://acaia-77.github.io/tw93-matt-skills-guide/`.
- Produces: `README.md` with stable user-facing documentation.

- [ ] **Step 1: Create `README.md`**

Write this exact content, adjusting only if repository metadata changes before execution:

```markdown
# tw93 · Matt Pocock 技能中文来源指南

这是一个纯静态的中文检索页，用来整理和浏览 tw93 与 Matt Pocock 公开发布的 AI Coding Skills。

线上页面：<https://acaia-77.github.io/tw93-matt-skills-guide/>

## 这个仓库是什么

本仓库把多个公开技能库中的 `SKILL.md` 内容整理成中文索引，并发布为 GitHub Pages 静态网站。目标是让你在编码、调试、写作、研究、代码审查、规划等任务开始前，快速找到应该调用或参考的 skill。

当前收录 **48** 条经过人工核验的技能数据：

- tw93/Waza：8 条
- tw93/Kami：1 条
- mattpocock/skills：39 条

页面支持即时搜索、站内展开详情、查看推荐/不推荐场景，以及跳转到 GitHub 原文。

## 怎么用

1. 打开线上页面：<https://acaia-77.github.io/tw93-matt-skills-guide/>
2. 在搜索框输入关键词，例如：
   - `调试`
   - `tdd`
   - `写作`
   - `review`
   - `tw93`
3. 查看匹配到的技能卡片。
4. 点击「查看详情」在站内展开完整说明。
5. 如果需要原始定义，点击「查看 GitHub 原文」。

搜索会匹配以下字段：

- 技能名称
- 作者
- 集合/分类
- 状态
- 简介
- 推荐场景
- 不推荐场景

## 数据来源

| 来源 | 用途 | 链接 |
| --- | --- | --- |
| tw93/Waza | tw93 的 Waza skills | <https://github.com/tw93/Waza> |
| tw93/Kami | tw93 的 Kami 文档/落地页 skill | <https://github.com/tw93/Kami> |
| mattpocock/skills | Matt Pocock 的 skills 集合 | <https://github.com/mattpocock/skills> |

人工整理说明见：[`sources/tw93-matt-skills-guide.md`](sources/tw93-matt-skills-guide.md)

运行时数据见：[`data/skills.json`](data/skills.json)

## 项目结构

```text
.
├── index.html                         # GitHub Pages 入口页面
├── assets/
│   ├── app.js                         # 搜索、渲染和详情展开逻辑
│   └── styles.css                     # 编辑型知识库视觉样式
├── data/
│   └── skills.json                    # 48 条技能的结构化数据
├── sources/
│   └── tw93-matt-skills-guide.md      # 中文来源指南与核验说明
├── tests/
│   └── search.test.mjs                # 搜索与状态样式测试
└── .github/workflows/deploy-pages.yml # GitHub Pages 部署工作流
```

## 本地预览

这个项目不需要安装依赖。用一个静态 HTTP 服务即可预览。

```bash
python -m http.server 8080
```

然后打开：

```text
http://localhost:8080/
```

不要直接用 `file://` 打开 `index.html`，因为浏览器会阻止页面读取 `data/skills.json`。

## 测试

使用 Node 内置测试运行器：

```bash
node --test tests/search.test.mjs
```

预期结果：所有测试通过。

## 如何维护数据

当上游 skills 发生变化时：

1. 核对上游 `SKILL.md` 是否存在、路径是否变化。
2. 更新 [`sources/tw93-matt-skills-guide.md`](sources/tw93-matt-skills-guide.md) 中的中文整理说明。
3. 更新 [`data/skills.json`](data/skills.json) 中对应字段。
4. 运行测试：

   ```bash
   node --test tests/search.test.mjs
   ```

5. 本地 HTTP 预览，确认页面能加载全部数据并搜索正常。
6. 提交并推送到 `main`，GitHub Actions 会自动部署。

## 部署

本仓库通过 GitHub Actions 部署到 GitHub Pages。工作流文件位于：

[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

每次推送到 `main` 分支都会触发部署。

## 说明

本项目只是公开技能内容的中文索引与检索页。技能原文版权与维护归各上游仓库作者所有；本仓库保留到原始 GitHub `SKILL.md` 的链接，便于追溯。
```

- [ ] **Step 2: Run tests**

Run:

```bash
node --test tests/search.test.mjs
```

Expected: `pass 6`, `fail 0`.

- [ ] **Step 3: Commit README**

```bash
git add README.md
git commit -m "docs: add repository readme"
```

---

### Task 2: Rename GitHub repository and update remote/local path

**Files:**
- Modify repository metadata on GitHub: `ACaiA-77/ACaiA-77.github.io` → `ACaiA-77/tw93-matt-skills-guide`
- Modify local git config: remote `origin`
- Rename local directory: `C:\Users\ACaiA-77\ACaiA-77.github.io` → `C:\Users\ACaiA-77\tw93-matt-skills-guide`

**Interfaces:**
- Consumes: committed README from Task 1.
- Produces: renamed GitHub repository and local checkout aligned with the new name.

- [ ] **Step 1: Rename the GitHub repository in the browser**

Open:

```text
https://github.com/ACaiA-77/ACaiA-77.github.io/settings
```

Use the repository rename field to change the name to:

```text
tw93-matt-skills-guide
```

Expected: GitHub shows the repository at:

```text
https://github.com/ACaiA-77/tw93-matt-skills-guide
```

- [ ] **Step 2: Update local remote URL**

Run from the repository:

```bash
git remote set-url origin https://github.com/ACaiA-77/tw93-matt-skills-guide.git
git remote -v
```

Expected output includes:

```text
origin  https://github.com/ACaiA-77/tw93-matt-skills-guide.git (fetch)
origin  https://github.com/ACaiA-77/tw93-matt-skills-guide.git (push)
```

- [ ] **Step 3: Push committed README and spec/plan commits**

Run:

```bash
git push origin main
```

Expected: push succeeds to `ACaiA-77/tw93-matt-skills-guide`.

- [ ] **Step 4: Rename local directory**

From `C:\Users\ACaiA-77`, after leaving the repository directory, run:

```powershell
Rename-Item -Path "C:\Users\ACaiA-77\ACaiA-77.github.io" -NewName "tw93-matt-skills-guide"
```

Expected local path:

```text
C:\Users\ACaiA-77\tw93-matt-skills-guide
```

- [ ] **Step 5: Verify repository state from new path**

Run:

```bash
cd C:\Users\ACaiA-77\tw93-matt-skills-guide
git status --short
git remote -v
node --test tests/search.test.mjs
```

Expected:

- `git status --short` has no source-file changes.
- remote points to `tw93-matt-skills-guide.git`.
- tests show `pass 6`, `fail 0`.

---

### Task 3: Verify project Pages deployment after rename

**Files:**
- Read: `.github/workflows/deploy-pages.yml`
- Read: `README.md`

**Interfaces:**
- Consumes: renamed repository and pushed commits.
- Produces: verified public project Pages URL.

- [ ] **Step 1: Check GitHub Actions**

Open:

```text
https://github.com/ACaiA-77/tw93-matt-skills-guide/actions
```

Expected: the latest `Deploy to GitHub Pages` run completes successfully.

- [ ] **Step 2: Open the project Pages URL**

Open:

```text
https://acaia-77.github.io/tw93-matt-skills-guide/
```

Expected:

- Page title contains `Skills Atlas`.
- Result count says `找到 48 个技能`.

- [ ] **Step 3: Browser smoke test search**

In the page console or browser automation, set the search box to `tdd` and dispatch an input event:

```javascript
const input = document.getElementById('skill-search');
input.value = 'tdd';
input.dispatchEvent(new Event('input', { bubbles: true }));
document.getElementById('result-count').textContent;
```

Expected:

```text
找到 1 个技能
```

- [ ] **Step 4: Confirm no console/page errors**

Expected: no page errors and no unexpected console output.
