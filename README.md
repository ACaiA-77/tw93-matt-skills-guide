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
