# SKJrpg.github.io

> SKJ 的个人网站 — 博客 · 作品集 · 简历

基于 [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) 主题构建，托管于 [GitHub Pages](https://pages.github.com/)。

🌐 **在线访问**：[skjrpg.github.io](https://skjrpg.github.io)

---

## 目录

- [目录](#目录)
- [功能概览](#功能概览)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
  - [布局继承关系](#布局继承关系)
- [本地开发](#本地开发)
  - [前置要求](#前置要求)
  - [安装与运行](#安装与运行)
- [部署方式](#部署方式)
- [内容管理](#内容管理)
  - [撰写博客](#撰写博客)
  - [创建页面](#创建页面)
  - [导航菜单](#导航菜单)
- [自定义配置](#自定义配置)
  - [\_config.yml 全局配置](#_configyml-全局配置)
  - [页面级参数](#页面级参数)
- [常用功能](#常用功能)
  - [评论系统](#评论系统)
  - [Google Analytics](#google-analytics)
  - [SEO 与社交分享](#seo-与社交分享)
  - [RSS 订阅](#rss-订阅)
  - [标签系统](#标签系统)
  - [搜索功能](#搜索功能)
- [致谢](#致谢)
- [许可证](#许可证)

---

## 功能概览

| 功能 | 说明 |
|------|------|
| 📝 博客 | 支持 Markdown 撰写文章，自动生成文章列表与时间线 |
| 🎨 作品集 | 展示个人项目与作品 |
| 📄 简历 | 在线简历页面，随时更新 |
| 🏷️ 标签 | 文章标签自动归类，生成标签索引页 |
| 🔍 搜索 | 导航栏搜索按钮，快速定位内容 |
| 💬 评论 | 支持 Disqus / giscus / Utterances / Facebook 等评论系统 |
| 📊 分析 | 可集成 Google Analytics |
| 📡 RSS | 自动生成 RSS 订阅源 |
| 📱 响应式 | 移动端优先设计，适配各种屏幕尺寸 |
| 🔎 SEO | 内置 SEO 优化与 Open Graph 社交分享支持 |

---

## 技术栈

- **静态站点生成**：[Jekyll](https://jekyllrb.com/)
- **主题**：[Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) by Dean Attali
- **托管**：GitHub Pages
- **前端**：Bootstrap 5 + Font Awesome
- **标记语言**：Markdown / HTML + YAML Front Matter
- **包管理**：Ruby Bundler（Gemfile）

---

## 项目结构

```
skjrpg.github.io/
├── .github/                    # GitHub 配置（Issue / PR 模板）
├── _data/                      # 数据配置文件
├── _includes/                  # 可复用模板组件
│   ├── head.html               # <head> 标签内容（CSS、meta、SEO）
│   ├── nav.html                # 导航栏组件
│   ├── footer.html             # 页脚组件
│   ├── social-share.html       # 社交分享按钮
│   ├── comments.html           # 评论系统集成
│   ├── search.html             # 搜索功能组件
│   └── gtag.html               # Google Analytics 集成
├── _layouts/                   # 页面布局模板
│   ├── base.html               # 基础布局（所有布局的父模板，除 minimal）
│   ├── default.html            # 默认布局（继承 base，简单内容容器）
│   ├── page.html               # 静态页面布局（继承 base）
│   ├── post.html               # 博客文章布局（继承 base，含标签、分享、评论）
│   ├── home.html               # 首页布局（继承 page，含文章列表和分页）
│   └── minimal.html            # 最小布局（独立，无导航栏和页脚）
├── _posts/                     # 博客文章
│   └── YYYY-MM-DD-title.md     # 文章命名规范
├── _sass/                      # SCSS 样式源文件
├── assets/                     # 静态资源
│   ├── css/                    # 编译后的 CSS（beautifuljekyll.css 等）
│   ├── js/                     # JavaScript（beautifuljekyll.js 等）
│   └── img/                    # 图片资源
├── _config.yml                 # 站点全局配置（核心配置文件）
├── Gemfile                     # Ruby 依赖声明
├── beautiful-jekyll-theme.gemspec  # Ruby gem 包描述
├── staticman.yml               # Staticman 评论配置
├── index.html                  # 站点首页（使用 home 布局）
├── tags.html                   # 标签索引页
├── 404.html                    # 404 错误页面
├── feed.xml                    # RSS 订阅源
├── aboutme.md                  # "关于我"页面
├── CHANGELOG.md                # Beautiful Jekyll 主题更新日志
├── README.md                   # 本文件
├── LICENSE                     # MIT 许可证
├── .gitignore                  # Git 忽略规则
└── .gitattributes              # Git 行尾格式配置（统一 LF）
```

### 布局继承关系

```
base.html
├── default.html（简单内容容器）
├── page.html（静态页面，含评论）
│   └── home.html（首页，含文章列表 + 分页）
├── post.html（博客文章，含标签、分享、评论、前后导航）
minimal.html（独立布局，不继承 base）
```

---

## 本地开发

### 前置要求

- [Ruby](https://www.ruby-lang.org/) 3.0+ （推荐使用 [rbenv](https://github.com/rbenv/rbenv) 管理版本）
- [Bundler](https://bundler.io/)（`gem install bundler`）
- [Git](https://git-scm.com/)

### 安装与运行

```bash
# 1. 克隆仓库
git clone https://github.com/skjrpg/skjrpg.github.io.git
cd skjrpg.github.io

# 2. 安装依赖
bundle install

# 3. 启动本地开发服务器
bundle exec jekyll serve

# 4. 浏览器访问
# http://127.0.0.1:4000
```

开发时如需实时刷新，使用：

```bash
bundle exec jekyll serve --livereload
```

---

## 部署方式

本项目使用 **GitHub Pages 自动部署**，无需手动操作：

1. 将代码推送到 `main` 分支
2. GitHub Actions 自动触发 Jekyll 构建
3. 构建完成后网站自动更新

```bash
git add .
git commit -m "your commit message"
git push origin main
```

> 💡 构建通常在 1-2 分钟内完成，可在仓库的 **Actions** 标签页查看构建状态。

---

## 内容管理

### 撰写博客

在 `_posts/` 目录下创建文件，文件名格式为 `YYYY-MM-DD-title.md`：

```markdown
---
title: "文章标题"
subtitle: "文章副标题"
tags: [标签1, 标签2]
cover-img: /assets/img/cover.jpg
comments: true
---

这里是正文内容，使用 Markdown 语法书写。
```

### 创建页面

在项目根目录或 `pages/` 目录下创建 `.md` 或 `.html` 文件：

```markdown
---
title: "页面标题"
layout: page
permalink: /your-url/
---

页面内容
```

### 导航菜单

在 `_config.yml` 的 `navbar-links` 中配置：

```yaml
navbar-links:
  About Me: "aboutme"
  Resources: "resources"
```

---

## 自定义配置

### _config.yml 全局配置

`_config.yml` 是站点的核心配置文件，主要配置项：

| 配置项 | 说明 |
|--------|------|
| `title` | 站点标题，显示在导航栏和浏览器标签 |
| `description` | 站点描述，用于 SEO |
| `url` | 站点 URL（`https://skjrpg.github.io`） |
| `author` | 作者信息（名称、社交链接等） |
| `navbar-links` | 导航菜单项 |
| `avatar` | 头像图片路径 |
| `footer-links` | 页脚社交链接（GitHub、邮箱等） |

> ⚠️ 修改 `_config.yml` 后需重启本地开发服务器才能生效。

### 页面级参数

每个页面可通过 YAML Front Matter 设置独立参数：

| 参数 | 说明 |
|------|------|
| `title` | 页面/文章标题 |
| `subtitle` | 副标题 |
| `tags` | 标签列表，如 `[tech, life]` |
| `cover-img` | 全幅封面图片 |
| `comments` | 是否开启评论（`true` / `false`） |
| `layout` | 页面布局（`page` / `post` / `home`） |
| `full-width` | 内容全宽显示（`true`） |
| `css` | 页面额外 CSS 文件 |
| `js` | 页面额外 JS 文件 |

---

## 常用功能

### 评论系统

支持多种评论方案，在 `_config.yml` 中配置：

- **Disqus**：设置 `disqus` 为你的 Disqus shortname
- **giscus**：基于 GitHub Discussions，推荐方案
- **Utterances**：基于 GitHub Issues
- **Facebook Comments**：配置 Facebook App ID

### Google Analytics

在 `_config.yml` 中添加：

```yaml
gtag: G-XXXXXXXXXX
```

### SEO 与社交分享

Beautiful Jekyll 内置 SEO 优化：
- 自动生成 `<meta>` 标签和 Open Graph 信息
- 可通过 Front Matter 的 `share-img` 自定义社交分享图片
- 可通过 `share-description` 自定义分享描述

### RSS 订阅

自动生成 RSS 订阅源，地址为：

```
https://skjrpg.github.io/feed.xml
```

### 标签系统

- 文章中通过 `tags: [标签1, 标签2]` 添加标签
- 自动生成标签索引页，通过导航栏访问

### 搜索功能

在 `_config.yml` 中启用：

```yaml
search: true
```

启用后导航栏会出现搜索按钮，支持全文搜索。

---

## 致谢

- [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) — 由 [Dean Attali](https://deanattali.com/) 开发和维护的优秀 Jekyll 主题
- [Jekyll](https://jekyllrb.com/) — 静态站点生成器
- [GitHub Pages](https://pages.github.com/) — 免费静态站点托管

---

## 许可证

本项目代码遵循 [MIT License](https://opensource.org/licenses/MIT)。

Beautiful Jekyll 主题默认在页面底部显示主题推广链接，如需移除可参考 [Beautiful Jekyll Plans](https://github.com/daattali/beautiful-jekyll#plans)。
