# AGENTS.md — Beautiful Jekyll 项目指南

> 本文件为 AI 辅助开发提供项目上下文，帮助理解项目架构、编码规范和开发流程。

---

## 1. 项目概述

**Beautiful Jekyll** 是由 Dean Attali 开发的即用型 Jekyll 静态网站模板，目标是让任何人都能在几分钟内创建美观的个人站点、博客或项目网站。项目具有以下核心特点：

- **简单易用**：Fork → 重命名 → 配置，三步建站
- **现代设计**：移动优先，响应式布局，在 Chrome 审计中接近满分
- **高度可定制**：通过 `_config.yml` 和页面 front matter 控制几乎所有外观和行为
- **功能丰富**：SEO 优化、社交媒体分享、多平台评论系统、标签索引、站内搜索、RSS 订阅
- **灵活部署**：支持 GitHub Pages 直接部署或作为 Ruby Gem 使用

**当前版本**：v6.0.1+（未发布版本包含 Font Awesome 6.5.2、CSS 变量等更新）

**许可证**：MIT

---

## 2. 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 静态站点生成器 | Jekyll | 核心框架，GitHub Pages 原生支持 |
| 前端框架 | Bootstrap 4 | 响应式布局和 UI 组件 |
| 图标库 | Font Awesome 6.5.2 | 社交图标、导航图标等 |
| JS 库 | jQuery 3.x (slim) | Bootstrap 依赖及部分交互功能 |
| 依赖管理 | Ruby Gem (Bundler) | 通过 `Gemfile` 和 `beautiful-jekyll-theme.gemspec` 管理 |
| 部署平台 | GitHub Pages | 零配置自动部署，也支持其他平台 |
| 模板语言 | Liquid | Jekyll 模板引擎，用于布局和组件 |
| 样式语言 | CSS（使用 rem 单位） | 完全响应式，支持 CSS 变量 |
| 内容格式 | Markdown (kramdown) | 博客文章和页面内容 |

**代码占比**：HTML 59.1% / CSS 32.2% / JavaScript 6.8% / Ruby 1.9%

---

## 3. 项目目录结构

```
beautiful-jekyll/
├── .github/                    # GitHub 配置（Issue 模板、PR 模板等）
├── _data/                      # 数据配置文件
├── _includes/                  # 可复用模板组件
│   ├── head.html               # <head> 标签内容（CSS、meta、SEO）
│   ├── nav.html                # 导航栏组件
│   ├── footer.html             # 页脚组件
│   ├── social-share.html       # 社交分享按钮
│   ├── comments.html           # 评论系统集成
│   ├── search.html             # 搜索功能组件
│   ├── gtag.html               # Google Analytics 集成
│   └── ...                     # 其他组件
├── _layouts/                   # 页面布局模板（层次结构）
│   ├── base.html               # 基础布局（所有布局的父模板，除 minimal）
│   ├── default.html            # 默认布局（继承 base，简单内容容器）
│   ├── page.html               # 静态页面布局（继承 base）
│   ├── post.html               # 博客文章布局（继承 base，含标签、分享、评论）
│   ├── home.html               # 首页布局（继承 page，含文章列表和分页）
│   └── minimal.html            # 最小布局（独立，无导航栏和页脚）
├── _posts/                     # 博客文章目录
│   └── YYYY-MM-DD-title.md     # 文章命名规范
├── assets/                     # 静态资源
│   ├── css/                    # 样式文件（beautifuljekyll.css 等）
│   ├── js/                     # JavaScript 文件（beautifuljekyll.js 等）
│   └── img/                    # 图片资源
├── _config.yml                 # 站点全局配置（核心配置文件）
├── Gemfile                     # Ruby 依赖声明
├── beautiful-jekyll-theme.gemspec  # Ruby gem 包描述
├── index.html                  # 站点首页（使用 home 布局）
├── 404.html                    # 404 错误页面
├── feed.xml                    # RSS 订阅源
├── tags.html                   # 标签索引页
├── staticman.yml               # Staticman 评论配置
├── aboutme.md                  # 示例"关于我"页面
├── CHANGELOG.md                # 版本更新日志
├── README.md                   # 项目说明文档
├── LICENSE                     # MIT 许可证
├── .gitignore                  # Git 忽略规则
└── .gitattributes              # Git 行尾格式配置（统一 LF）
```

---

## 4. 架构设计

### 4.1 配置驱动架构

项目采用**配置驱动**设计，几乎所有外观和行为都通过配置控制，无需修改代码：

- **站点级配置**：`_config.yml`，控制全站行为（标题、导航、社交链接、颜色、分析、评论等）
- **页面级配置**：每个页面的 YAML front matter，覆盖或补充站点配置

**优先级**：页面 front matter > `_config.yml` 默认值

### 4.2 布局层次结构

```
base.html
├── default.html（简单内容容器）
├── page.html（静态页面，含评论）
│   └── home.html（首页，含文章列表 + 分页）
├── post.html（博客文章，含标签、分享、GitHub 徽章、评论、前后导航）
minimal.html（独立布局，不继承 base）
```

### 4.3 组件化结构

通过 `_includes/` 目录下的可复用组件构建页面：

| 组件 | 说明 |
|------|------|
| `head.html` | `<head>` 标签内容：meta、CSS 加载、SEO 标签 |
| `nav.html` | 导航栏：菜单、搜索按钮、移动端汉堡菜单 |
| `footer.html` | 页脚：社交链接、版权信息、自定义内容 |
| `social-share.html` | 社交分享按钮（Twitter/Facebook/LinkedIn/Reddit 等） |
| `comments.html` | 评论系统（Disqus/Facebook/Utterances/giscus/Staticman/CommentBox） |
| `search.html` | 站内搜索功能 |

### 4.4 渐进增强

核心内容在无 JavaScript 时仍可正常展示，JS 仅增强交互体验（搜索、评论、分享等）。

---

## 5. 关键配置说明

### 5.1 `_config.yml` 核心配置项

```yaml
# 必须修改
title: "Your Site Title"
author: "Your Name"

# 导航菜单
navbar-links:
  About Me: "aboutme"
  Resources:
    - Beautiful Jekyll: "https://beautifuljekyll.com"

# 社交网络链接
social-network-links:
  github: yourusername
  email: "your@email.com"

# 颜色配置
page-col: "#FFFFFF"
text-col: "#404040"
link-col: "#008AFF"

# 功能开关
post_search: true
rss-description: "Site description for RSS"
```

### 5.2 页面 Front Matter 常用参数

```yaml
---
layout: post              # 布局类型：post / page / home / minimal / default
title: "文章标题"
subtitle: "副标题"
cover-img: /assets/img/cover.jpg    # 封面图
thumbnail-img: /assets/img/thumb.jpg # 缩略图
tags: [tag1, tag2]                  # 标签
comments: true                      # 启用评论
mathjax: true                       # 启用 MathJax 数学公式
social-share: true                  # 社交分享按钮
full-width: true                    # 全宽布局
author: "Author Name"               # 文章作者
last-updated: "2024-01-01"          # 最后更新时间
share-title: "Custom Share Title"   # 自定义分享标题
share-description: "Custom desc"    # 自定义分享描述
gh-repo: user/repo                  # GitHub 仓库徽章
gh-badge: [star, fork, follow]      # 显示的 GitHub 徽章
---
```

---

## 6. 开发规范

### 6.1 文件命名

- 博客文章：`_posts/YYYY-MM-DD-title.md`（日期 + 短横线分隔标题）
- 布局文件：`_layouts/name.html`
- 组件文件：`_includes/name.html`
- CSS/JS 资源：`assets/css/beautifuljekyll.css` / `assets/js/beautifuljekyll.js`

### 6.2 内容编写

- 所有页面**必须**包含 YAML front matter（即使为空 `---\n---`），否则不会应用主题样式
- 文章内容使用 Markdown（kramdown）编写
- 支持特殊 CSS 类的提示框：

```markdown
{: .box-note}
Note: 通知提示框

{: .box-warning}
Warning: 警告提示框

{: .box-error}
Error: 错误提示框
```

- 支持代码高亮（使用 Liquid 标签 `{% highlight language linenos %}`）
- 支持 MathJax 数学公式（需在 front matter 设置 `mathjax: true`）

### 6.3 CSS 规范

- 使用 `rem` 单位而非 `px`，确保完全响应式
- 支持 CSS 变量进行主题定制
- 主 CSS 文件命名为 `beautifuljekyll.css`（v5.0 起从 `main` 重命名）
- 页面特定 CSS 通过 front matter 的 `css` / `ext-css` 参数引入
- 全站 CSS 通过 `_config.yml` 的 `site-css` 配置引入

### 6.4 JavaScript 规范

- 核心 JS 文件命名为 `beautifuljekyll.js`
- 页面特定 JS 通过 front matter 的 `js` / `ext-js` 参数引入
- 全站 JS 通过 `_config.yml` 的 `site-js` 配置引入
- 遵循渐进增强原则，核心功能不依赖 JS

### 6.5 行尾格式

- 所有文本文件使用 **LF** 行尾（通过 `.gitattributes` 强制）
- 二进制文件标记为 `binary`

### 6.6 版本控制

- `.gitignore` 排除站点构建缓存（`_site/`）、虚拟机目录、系统文件等
- 不要提交 `_site/` 目录（构建产物）
- 不要提交 Gemfile.lock（模板项目不锁定依赖版本）

---

## 7. 构建与部署

### 7.1 GitHub Pages 部署（推荐）

1. Fork 项目到自己的 GitHub 账户
2. 重命名仓库为 `YOURUSERNAME.github.io`
3. 修改 `_config.yml` 配置
4. 每次提交后 GitHub 自动构建，约 1 分钟生效

### 7.2 本地开发

```bash
# 安装依赖
bundle install

# 本地预览（含热重载）
bundle exec jekyll serve

# 构建静态站点
bundle exec jekyll build
```

> ⚠️ 修改 `_config.yml` 后需要重启 Jekyll 服务才能生效；front matter 修改即时生效。

### 7.3 作为 Ruby Gem 使用

在项目的 `Gemfile` 中添加：
```ruby
gem "beautiful-jekyll"
```

在 `_config.yml` 中配置：
```yaml
theme: beautiful-jekyll
# 或使用 remote_theme
remote_theme: daattali/beautiful-jekyll
```

---

## 8. 集成功能参考

### 8.1 评论系统

| 系统 | 配置参数 |
|------|----------|
| Disqus | `disqus: "shortname"` |
| Facebook | `fb_comment_id: "123456"` |
| Utterances | `utterances: repo: "user/repo"` |
| giscus | `giscus: repo: "user/repo"` |
| Staticman | `staticman:` + `staticman.yml` |
| CommentBox | `commentbox: "project-id"` |

### 8.2 分析平台

| 平台 | 配置参数 |
|------|----------|
| Google Analytics 4 | `gtag: "G-XXXXXXX"` |
| Cloudflare Analytics | `cloudflare_analytics: "token"` |
| Google Tag Manager | `gtm: "GTM-XXXXXXX"` |

### 8.3 社交网络

支持的社交链接：GitHub, GitLab, Twitter/X, Facebook, LinkedIn, Instagram, YouTube, Discord, Telegram, Mastodon, Bluesky, Reddit, Steam, Kaggle, Google Scholar, ORCID, Medium, Patreon, Itch.io, Hackerrank, Strava, Whatsapp, Untappd, Calendly, Yelp, Twitch, VK 等。

---

## 9. 常见任务指南

### 添加新博客文章

1. 在 `_posts/` 下创建 `YYYY-MM-DD-title.md`
2. 添加 front matter（至少设置 `layout: post` 和 `title`）
3. 用 Markdown 编写内容
4. 提交并推送，GitHub 自动重建

### 添加新页面

1. 在项目根目录创建 `.md` 或 `.html` 文件
2. 添加 front matter（至少设置 `layout: page` 和 `title`）
3. 如需出现在导航栏，在 `_config.yml` 的 `navbar-links` 中添加链接

### 自定义样式

- **页面级**：通过 front matter 的 `css` / `ext-css` 引入
- **全站级**：通过 `_config.yml` 的 `site-css` 配置，或直接修改 `assets/css/beautifuljekyll.css`

### 添加自定义 JavaScript

- **页面级**：通过 front matter 的 `js` / `ext-js` 引入
- **全站级**：通过 `_config.yml` 的 `site-js` 配置，或直接修改 `assets/js/beautifuljekyll.js`

### 在内容前后添加通用 HTML

使用 front matter 的扩展钩子：
```yaml
before-content: ["custom-banner.html"]
after-content: ["custom-footer.html"]
```

---

## 10. 版本升级注意事项

| 版本 | 关键破坏性变更 |
|------|---------------|
| v3.0 | Bootstrap 3 → 4，自定义 HTML/CSS 可能受影响；`bigimg` → `cover-img`；jQuery 1.x → 3.x |
| v4.0 | `image` → `thumbnail-img`；缩略图不再作为头像 |
| v5.0 | `description` → `share-description`；移除 `use-site-title`、`meta-title`、`meta-description` |
| v6.0 | Google Universal Analytics → GA4；RSS 生成逻辑变更 |
| 未发布 | Google Scholar 链接格式变更；Twitter 图标更换为 X；Yelp URL 格式变更 |

升级时务必查阅 `CHANGELOG.md` 了解完整变更列表。

---

## 11. 项目链接

- **仓库**：https://github.com/daattali/beautiful-jekyll
- **演示站点**：https://beautifuljekyll.com
- **文档**：README.md（项目根目录）
- **更新日志**：CHANGELOG.md
- **问题反馈**：GitHub Issues
- **赞助**：https://www.patreon.com/DeanAttali
