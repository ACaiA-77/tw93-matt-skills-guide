# tw93 · Matt Pocock 技能中文来源指南

> 本文件是 `data/skills.json` 的人工审阅中文来源指南。共 **48** 条技能，来自 tw93 与 Matt Pocock 三个官方 GitHub 仓库的 `main` 分支 `SKILL.md`。

## 一、来源与重建说明

简报原要求「原样复制」一份已审阅整理文档作为本指南。该输入文件
`C:\Users\ACaiA-77\dim-agent\tw93-matt-skills-guide.md` 已确认丢失（见 `task-2-report.md` 红色证据）。
经用户授权，本指南改为**从官方 main 分支 `SKILL.md` 重新核验并整理为中文**：

- 描述（description）：依据官方 `SKILL.md` frontmatter 的 `description` 忠实翻译/整理为中文。
- 推荐场景（recommended）：依据官方描述中的「Use when …」场景整理为中文；无显式场景者依据其能力陈述归纳。
- 不推荐场景（notRecommended）：依据官方描述中的「Not for …」整理；无显式说明者依据该技能声明范围的反面归纳，不杜撰功能。
- 链接（sourceUrl）：逐一核验为可解析的 GitHub HTTPS `main` 分支 `SKILL.md` 链接。

所有 `SKILL.md` 路径均经 GitHub Trees API（`recursive=1`）与 raw 文件抓取双重确认存在。

## 二、上游仓库与路径模式

| 作者 | 仓库 | 默认分支 | 技能 `SKILL.md` 路径模式 | 条目数 |
| --- | --- | --- | --- | --- |
| tw93 | `tw93/Waza` | `main` | `plugins/waza/skills/<name>/SKILL.md` | 8 |
| tw93 | `tw93/Kami` | `main` | `SKILL.md`（仓库根） | 1 |
| matt | `mattpocock/skills` | `main` | `skills/<collection-dir>/<name>/SKILL.md` | 39 |

> 注：`tw93/Waza` 的技能实际位于 `plugins/waza/skills/<name>/SKILL.md`（非顶层 `skills/`）。简报示例中
> `think` 的链接写作 `skills/think/SKILL.md`，但该路径在 `main` 上不存在（404）；本指南采用经核验
> 可解析的 `plugins/waza/skills/think/SKILL.md`。详见报告「链接核验」一节。

Matt Pocock 的 collection 目录映射：

| collection（显示值） | 目录段 | status |
| --- | --- | --- |
| Engineering | `engineering` | stable |
| Productivity | `productivity` | stable |
| In Progress | `in-progress` | in-progress |
| Misc | `misc` | misc |
| Personal | `personal` | personal |
| Deprecated | `deprecated` | deprecated |

## 三、记录字段（schema）

每条记录含 9 个非空字符串字段：

| 字段 | 说明 |
| --- | --- |
| `id` | 小写、唯一，由 `author-collection-name` 派生（如 `matt-engineering-tdd`、`tw93-waza-think`） |
| `name` | 技能名（与官方目录名一致） |
| `author` | `tw93` 或 `matt` |
| `collection` | `Waza` / `Kami` / `Engineering` / `Productivity` / `In Progress` / `Misc` / `Personal` / `Deprecated` |
| `status` | `stable` / `in-progress` / `misc` / `personal` / `deprecated` |
| `description` | 官方描述的中文整理 |
| `recommended` | 推荐场景（中文） |
| `notRecommended` | 不推荐场景（中文） |
| `sourceUrl` | GitHub HTTPS `main` 分支 `SKILL.md` 链接 |

**状态计数目标**：`stable:31`、`in-progress:7`、`misc:4`、`personal:2`、`deprecated:4`，合计 48。

---

## 四、tw93/Waza（stable，8 条）

### think
- 描述：编码前将粗略想法转成经过质疑和压力测试的决策完整计划。
- 推荐：新功能规划、架构设计、技术选型、可行性评估、价值判断。
- 不推荐：明确的小改动；排查 bug 时优先 hunt。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/think/SKILL.md>

### ui
- 描述：产出有辨识度、可上线品质的 UI，覆盖页面、组件、视觉界面、字体排印与基于截图的视觉打磨。
- 推荐：页面、组件、前端、字体排印、基于截图的视觉打磨，或反馈界面不清晰、难看、不一致、视觉异常时。
- 不推荐：后端逻辑或数据管线。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/ui/SKILL.md>

### check
- 描述：审查代码差异、PR、issue 队列、发布就绪度、提交、推送、发布与项目审计。
- 推荐：代码审查、issue/PR 分诊、发布门禁、发布跟进或项目审计。
- 不推荐：调试根因或文本润色（根因排查优先用 hunt，文本润色优先用 write）。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/check/SKILL.md>

### hunt
- 描述：在修复前先定位根因，处理报错、崩溃、回归、失败测试、异常行为与截图反馈的缺陷。
- 推荐：报错、崩溃、异常行为、回归、失败测试、截图证据，或「以前能用现在不行」时。
- 不推荐：代码审查或新功能开发（审查优先用 check，规划优先用 think）。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/hunt/SKILL.md>

### write
- 描述：用中文或英文重写并润色文本，去除 AI 腔，审校产品本地化文案，且保留原意。
- 推荐：起草、重写、校对、本地化、润色发布说明、去除 AI 腔，或准备上线与社媒文案。
- 不推荐：代码注释、提交信息或内联文档。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/write/SKILL.md>

### learn
- 描述：运行六阶段研究流程，把陌生领域、来源素材包或收集到的材料转成可发布的成果。
- 推荐：研究、学习、深挖、整理来源、综合陌生材料，或将素材包转成连贯参考。
- 不推荐：快速查阅或单文件阅读。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/learn/SKILL.md>

### read
- 描述：读取 URL 与 PDF，抓取源内容；普通阅读默认给精炼摘要，要求转换、保存、引用、转引或转喂下游时给干净 Markdown。
- 推荐：读取、抓取、核对、摘要、引用、转引、转换或保存 URL 或 PDF。
- 不推荐：仓库内已有的本地文本文件。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/read/SKILL.md>

### health
- 描述：在预算感知下运行 agent 辅助的工程健康审计，覆盖指令与配置漂移、hooks/MCP、验证面与 AI 可维护性。
- 推荐：审计 Claude、Codex、Pi、agent 指令、MCP 或 hooks、验证覆盖，或 AI 可维护性漂移。
- 不推荐：调试应用代码或审查 PR（审查优先用 check）。
- 来源：<https://github.com/tw93/Waza/blob/main/plugins/waza/skills/health/SKILL.md>

---

## 五、tw93/Kami（stable，1 条）

### kami
- 描述：排版专业文档与产品落地页：简历、单页、白皮书、信函、作品集、幻灯片、落地页；暖色羊皮纸底、墨蓝点缀、衬线主导的版式层级。
- 推荐：制作简历、单页、白皮书、信函、作品集、幻灯片（PPT/Marp/markdown slides）、落地页或官网，或把内容转成 PDF。
- 不推荐：需要可交互前端应用或后端逻辑（kami 专注文档与落地页排版）。
- 来源：<https://github.com/tw93/Kami/blob/main/SKILL.md>

---

## 六、Matt Pocock / Engineering（stable，17 条）

### ask-matt
- 描述：询问哪种技能或流程适合当前场景；是本仓库技能的路由器。
- 推荐：不确定该用哪个技能或流程时进行路由选择。
- 不推荐：已明确适用某具体技能时，直接调用该技能。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md>

### grill-with-docs
- 描述：通过持续追问打磨计划或设计，过程中同步产出文档（ADR 与术语表）。
- 推荐：想压力测试计划或设计，并希望同时沉淀 ADR 与术语表。
- 不推荐：只想打磨计划、不需要产出文档时可用 grill-me。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md>

### triage
- 描述：让 issue 与外部 PR 经过一组分诊角色的状态机：分类、核实、必要时追问，并写出 agent 可用的简报。
- 推荐：分诊 issue 与外部 PR，分类、核实、追问并生成 agent 简报。
- 不推荐：单个 bug 根因排查（优先用 diagnosing-bugs）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/triage/SKILL.md>

### improve-codebase-architecture
- 描述：扫描代码库寻找「加深」机会，以可视化 HTML 报告呈现，再就你选定的项逐个追问。
- 推荐：想发现并评估代码库的结构改进机会，并可视化呈现。
- 不推荐：还没有可扫描的代码库，或只想做单文件改动。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md>

### setup-matt-pocock-skills
- 描述：为工程类技能配置本仓库：搭建 issue 跟踪器、分诊标签词表与领域文档布局；首次使用其他工程技能前运行一次。
- 推荐：首次启用工程类技能前的仓库初始化。
- 不推荐：已配置完成的仓库重复初始化。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/setup-matt-pocock-skills/SKILL.md>

### to-spec
- 描述：把当前对话整理成 spec 并发布到项目 issue 跟踪器——无需访谈，直接综合已讨论内容。
- 推荐：已有充分讨论、想快速产出并发布 spec。
- 不推荐：讨论尚不充分、还需要引导式访谈梳理需求时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md>

### to-tickets
- 描述：把计划、spec 或当前对话拆成一组 tracer-bullet 工单，每个工单声明其阻塞边，发布到已配置的跟踪器。
- 推荐：想把计划、spec 或对话拆解为带阻塞关系的可执行工单。
- 不推荐：还没有计划或 spec 可拆分时（先用 think 或 to-spec 规划）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md>

### implement
- 描述：基于一份 spec 或一组工单实现一项工作。
- 推荐：已有 spec 或工单、要落地实现时。
- 不推荐：还没有 spec 或工单、需求未明确时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md>

### wayfinder
- 描述：把超出单个 agent 会话容量的大块工作，规划为 issue 跟踪器上一张共享的「决策工单地图」，逐个解决直到通往目标的路径清晰。
- 推荐：规模庞大、跨多次会话的工作路径规划与决策梳理。
- 不推荐：单次会话内可完成的小块工作。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md>

### prototype
- 描述：构建一次性原型来回答某个设计问题。
- 推荐：想验证状态模型或逻辑是否合理，或探索 UI 应有的样子。
- 不推荐：要产出可上线的生产代码（原型为一次性、不可直接交付）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/prototype/SKILL.md>

### diagnosing-bugs
- 描述：针对难缠 bug 与性能回归的诊断循环。
- 推荐：用户说「诊断」或「调试」，或报告某处损坏、抛错、失败、变慢。
- 不推荐：简单一眼可见的 bug（直接修即可）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md>

### research
- 描述：基于高可信一手来源调查某个问题，并把结论以 Markdown 文件保存到仓库。
- 推荐：想研究某个主题、收集文档或 API 事实，或把阅读检索交给后台 agent。
- 不推荐：仅需快速检索、无需沉淀成仓库文档的问题。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/research/SKILL.md>

### tdd
- 描述：测试驱动开发。
- 推荐：想以测试先行的方式构建功能或修复 bug、提到「red-green-refactor」，或需要集成测试。
- 不推荐：不打算写测试的改动或一次性脚本。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/tdd/SKILL.md>

### domain-modeling
- 描述：构建并打磨项目的领域模型。
- 推荐：想敲定领域术语或统一语言、记录架构决策，或供其他技能维护领域模型。
- 不推荐：与领域建模无关的纯实现改动。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md>

### codebase-design
- 描述：设计「深模块」的共享词汇。
- 推荐：设计或改进模块接口、寻找加深机会、决定接缝位置，或让代码更可测、对 AI 更可导航。
- 不推荐：与模块接口设计无关的局部改动。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md>

### code-review
- 描述：自某个固定点（提交、分支、标签或 merge-base）起审查变更，沿两个轴：规范（是否遵循仓库文档化编码规范）与规格（是否匹配原始 issue/PRD 要求）；并行 sub-agent 运行两项审查并并排报告。
- 推荐：审查分支、PR、进行中的改动，或要求「review since X」。
- 不推荐：排查 bug 根因（优先用 diagnosing-bugs）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md>

### resolving-merge-conflicts
- 描述：解决进行中的 git merge 或 rebase 冲突。
- 推荐：需要解决进行中的 git 合并或 rebase 冲突。
- 不推荐：没有进行中的合并或 rebase 冲突时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/engineering/resolving-merge-conflicts/SKILL.md>

---

## 七、Matt Pocock / Productivity（stable，5 条）

### grill-me
- 描述：一场持续追问的访谈，用于打磨计划或设计。
- 推荐：想压力测试并打磨计划或设计。
- 不推荐：只想打磨并同步产出文档时可用 grill-with-docs。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md>

### handoff
- 描述：把当前对话压缩成交接文档，供另一个 agent 接手。
- 推荐：想把会话状态打包成交接文档交给新 agent。
- 不推荐：想直接在后台启动新 agent 接手时可用 claude-handoff。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md>

### teach
- 描述：在当前工作区内向用户教授一项新技能或概念。
- 推荐：想系统学习或被教授一个新技能或概念。
- 不推荐：只需一次性查找某个具体命令或 API。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md>

### writing-great-skills
- 描述：写好与编好技能的参考：让技能可预测的词汇与原则。
- 推荐：想撰写或编辑高质量、可预测的技能。
- 不推荐：与技能编写无关的普通文本写作。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-great-skills/SKILL.md>

### grilling
- 描述：围绕计划、决策或想法对用户持续追问。
- 推荐：用户想压力测试自己的想法，或使用任何「grill」触发短语。
- 不推荐：已定稿、无需再压力测试时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md>

---

## 八、Matt Pocock / In Progress（in-progress，7 条）

### loop-me
- 描述：在当前工作区内，围绕我想构建的工作流的 spec 对我追问。
- 推荐：想为待构建的工作流梳理并敲定 spec。
- 不推荐：已有明确 spec、只需实现时（用 implement）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/in-progress/loop-me/SKILL.md>

### wizard
- 描述：生成一个交互式 bash 向导，引导人类完成手工流程——第三方安装、一次性迁移、A→B 状态切换——打开 URL、采集取值、逐步确认，并写入 .env 文件与 GitHub Actions 密钥。
- 推荐：需要把多步手工流程封装成可引导的交互式向导。
- 不推荐：可直接自动化、无需人工逐步确认的流程。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/in-progress/wizard/SKILL.md>

### writing-beats
- 描述：写作·开发阶段——把原始素材组装成一段由 beat 组成的旅程，在每个 beat 依赖某术语前先为其奠基。
- 推荐：已有原始素材，想将其组织成有节奏的叙事推进。
- 不推荐：素材堆还是空的（先用 writing-fragments 采集）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/in-progress/writing-beats/SKILL.md>

### writing-fragments
- 描述：写作·探索阶段——挖掘原始片段，尚无结构。
- 推荐：处于探索期，想先挖掘原始片段、不急着搭结构。
- 不推荐：已有素材、想直接成形为文章（用 writing-shape 或 writing-beats）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/in-progress/writing-fragments/SKILL.md>

### writing-shape
- 描述：写作·开发阶段——把原始素材逐段塑造成一篇文章。
- 推荐：已有素材，想逐段塑造成完整文章。
- 不推荐：还在挖素材、尚未到成形阶段（先用 writing-fragments）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/in-progress/writing-shape/SKILL.md>

### claude-handoff
- 描述：把当前对话交接给一个全新的后台 agent，立即接手工作。
- 推荐：想直接在后台启动新 agent 接手当前工作。
- 不推荐：只想生成交接文档、稍后再交接时（用 handoff）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/in-progress/claude-handoff/SKILL.md>

### setup-ts-deep-modules
- 描述：在 TypeScript 仓库中接入 dependency-cruiser，让每个包成为「深模块」——实现藏在子文件夹，仅通过入口文件可达；由用户手动调用。
- 推荐：想用 dependency-cruiser 强制 TypeScript 包的深模块边界。
- 不推荐：非 TypeScript 仓库，或不需要强制模块边界时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/in-progress/setup-ts-deep-modules/SKILL.md>

---

## 九、Matt Pocock / Misc（misc，4 条）

### git-guardrails-claude-code
- 描述：配置 Claude Code 钩子，在危险 git 命令（push、reset --hard、clean、branch -D 等）执行前拦截。
- 推荐：想阻止破坏性 git 操作、添加 git 安全钩子，或在 Claude Code 中拦截 push 或 reset。
- 不推荐：不使用 Claude Code 或不需要 git 安全拦截时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/misc/git-guardrails-claude-code/SKILL.md>

### migrate-to-shoehorn
- 描述：把测试文件从 as 类型断言迁移到 @total-typescript/shoehorn。
- 推荐：用户提到 shoehorn、想替换测试中的 as，或需要部分测试数据。
- 不推荐：测试中不含 as 断言或不在使用 TypeScript 时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/misc/migrate-to-shoehorn/SKILL.md>

### scaffold-exercises
- 描述：创建练习目录结构，含小节、题目、答案与讲解，且能通过 lint。
- 推荐：想搭练习脚手架、创建练习桩，或新建课程小节。
- 不推荐：只想写单个文件、不需要练习目录结构时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/misc/scaffold-exercises/SKILL.md>

### setup-pre-commit
- 描述：在当前仓库配置 Husky pre-commit 钩子，配 lint-staged（Prettier）、类型检查与测试。
- 推荐：想添加 pre-commit 钩子、配置 Husky 或 lint-staged，或在提交时做格式化、类型检查或测试。
- 不推荐：已有成熟 pre-commit 配置或不需要提交时校验时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/misc/setup-pre-commit/SKILL.md>

---

## 十、Matt Pocock / Personal（personal，2 条）

### edit-article
- 描述：通过重组小节、提升清晰度、收紧行文来编辑与改进文章。
- 推荐：想编辑、修订或改进一篇文章草稿。
- 不推荐：想从零起草全新文章（而非改稿）时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/personal/edit-article/SKILL.md>

### obsidian-vault
- 描述：在 Obsidian 知识库中搜索、创建与管理笔记，使用 wikilink 与索引笔记。
- 推荐：想在 Obsidian 中查找、创建或组织笔记。
- 不推荐：使用非 Obsidian 笔记系统时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/personal/obsidian-vault/SKILL.md>

---

## 十一、Matt Pocock / Deprecated（deprecated，4 条）

### design-an-interface
- 描述：用并行 sub-agent 为一个模块生成多个截然不同的接口设计方案。
- 推荐：想设计 API、探索接口选项、比较模块形态，或提到「design it twice」。
- 不推荐：已有单一确定接口、无需多方案对比时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/deprecated/design-an-interface/SKILL.md>

### qa
- 描述：交互式 QA 会话：用户以对话方式反馈 bug 或问题，agent 提交 GitHub issue，并在后台探索代码库以获取上下文与领域语言。
- 推荐：想以对话方式反馈 bug、做 QA、提交 issue，或提到「QA session」。
- 不推荐：已有明确复现步骤、想直接调试时（优先用 diagnosing-bugs）。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/deprecated/qa/SKILL.md>

### request-refactor-plan
- 描述：通过用户访谈产出带小步提交的详细重构计划，再作为 GitHub issue 提交。
- 推荐：想规划重构、创建重构 RFC，或把重构拆成安全的增量步骤。
- 不推荐：只想直接动手改、无需成文计划时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/deprecated/request-refactor-plan/SKILL.md>

### ubiquitous-language
- 描述：从当前对话中抽取 DDD 风格的统一语言术语表，标记歧义并提出规范术语；保存到 UBIQUITOUS_LANGUAGE.md。
- 推荐：想定义领域术语、建术语表、强化术语一致性、构建统一语言，或提到「domain model」或「DDD」。
- 不推荐：与领域术语无关的纯实现讨论时。
- 来源：<https://github.com/mattpocock/skills/blob/main/skills/deprecated/ubiquitous-language/SKILL.md>

---

## 十二、核验备注

- 全部 48 条 `SKILL.md` 路径均经 GitHub Trees API（`recursive=1`）确认存在，并以
  `raw.githubusercontent.com/<repo>/main/<path>` 抓取成功（每文件字节长度均 > 0）。
- `mattpocock/skills` 仓库 `skills/productivity/teach/SKILL.md` 与
  `skills/productivity/writing-great-skills/SKILL.md` 确实存在（首次 Trees 抓取因输出体积被截断而未显示，
  后以完整 `Invoke-RestMethod` 递归树获取到全部 39 条 `SKILL.md`）。
- 字段、计数、唯一性、HTTPS 校验均通过（见 `task-2-report.md` GREEN 证据）。
