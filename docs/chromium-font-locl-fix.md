# Chromium 浏览器下英文引号被渲染为中文引号的问题

## 问题描述

在 Chromium 内核浏览器（Chrome、Edge、Brave 等）下访问网站时，英文弯引号（`"` `"` `'` `'`）被渲染为中文全角引号，即使 HTML `lang="en"`。

## 根因分析

### 尝试过的无效方案

| 方案 | 结果 | 原因 |
|------|------|------|
| `font-feature-settings: "locl" 0` | 无效 | 禁用 locl 后 CJK 字体反而使用默认全角字形 |
| `font-language-override: "ENG"` | 无效 | Chromium 不支持此 CSS 属性（CSS Fonts Level 4 标记为 "at risk"） |

### 真正的根因：Chromium 字体回落（Font Fallback）

Chromium 在中文系统区域（zh-CN）下的字体选择策略：

1. 页面声明使用 Lora / Open Sans（Google Fonts 加载的拉丁字体）
2. 这两个字体包含 U+2018-U+201D（引号字符）的正确英文字形
3. **但 Chromium 在 zh-CN 区域下，会将字体回落链中的 CJK 系统字体优先级提高**
4. CJK 字体（如 Noto Sans CJK SC、微软雅黑）对引号字符的**默认字形是全角中文样式**
   - Noto CJK 文档明确说明："For CN and TW fonts, the full-width glyphs are the default"
5. 结果：Chromium 跳过 Lora/Open Sans，直接选择 CJK 系统字体渲染引号 → 用户看到中文全角引号

```
预期：Lora/Open Sans 渲染引号 → "..." (英文弯引号)
实际：CJK 系统字体渲染引号 → "..." (中文全角引号)
```

## 最终解决方案

### 策略

阻止 CJK 字体参与拉丁字符（含引号）的渲染。通过两层防护确保 Lora/Open Sans 独占比 Latin 范围的代码点。

### 修改 1：Google Fonts URL 添加 `&subset=latin`

**文件**：`_layouts/base.html` 第 9-10 行

```yaml
# 修改前
- "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
- "https://fonts.googleapis.com/css?family=Open+Sans:300italic,...,800"

# 修改后
- "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&subset=latin"
- "https://fonts.googleapis.com/css?family=Open+Sans:300italic,...,800&subset=latin"
```

`&subset=latin` 告诉 Google Fonts 只提供 Latin 字符集字体文件，不包含 CJK 字形。

### 修改 2：CSS @font-face unicode-range 覆盖

**文件**：`assets/css/beautifuljekyll.css` 末尾

```css
/* Fix: Prevent CJK font fallback for Latin quotation marks */
@font-face {
  font-family: 'Lora';
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                 U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193,
                 U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Open Sans';
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                 U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193,
                 U+2212, U+2215, U+FEFF, U+FFFD;
}
```

CSS 规范规定：后续同名 `font-family` 的 `unicode-range` 会覆盖前面的声明。此规则将 Lora/Open Sans 限制在 Latin 范围（U+2000-206F 包含引号字符），使 Chromium 无法将 CJK 字体用于这些代码点。

### 修改清单

| 文件 | 行号 | 修改内容 |
|------|------|---------|
| `_layouts/base.html` | L9-10 | Google Fonts URL 添加 `&subset=latin` |
| `assets/css/beautifuljekyll.css` | 末尾 | 新增 `@font-face` unicode-range 覆盖规则 |

## 验证方法

1. 部署后在 Chromium（zh-CN 区域）中访问网站
2. 检查引号是否显示为英文弯引号 `"` `"` `'` `'`
3. 开发者工具 → Elements → Computed → Rendered Fonts，确认引号使用 Lora/Open Sans 而非 CJK 系统字体

## 参考

- [Noto CJK: Proportional vs Full-width glyphs](https://github.com/googlefonts/noto-cjk/blob/main/Sans/README.md)
- [CSS Fonts Level 4: font-language-override](https://www.w3.org/TR/css-fonts-4/#font-language-override-prop)
- [Chromium font fallback with CJK locales](https://bugs.chromium.org/p/chromium/issues/detail?id=1085660)
