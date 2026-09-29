import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import type { MarkdownIt } from "markdown-it";
import MarkdownItMathjax3 from "markdown-it-mathjax3";
import theme from "./theme";

/**
 * 给 Markdown 表格套一层容器，让超过内容宽度的表格横向滚动，
 * 而不是把整页撑宽。
 */
const wrapTables = (md: MarkdownIt) => {
  const defaultOpen = md.renderer.rules.table_open;
  const defaultClose = md.renderer.rules.table_close;

  md.renderer.rules.table_open = (tokens, idx, options, env, self) => {
    const html = defaultOpen
      ? defaultOpen(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options);
    return `<div class="table-wrapper">${html}`;
  };

  md.renderer.rules.table_close = (tokens, idx, options, env, self) => {
    const html = defaultClose
      ? defaultClose(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options);
    return `${html}</div>`;
  };
};

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Zirno_81",
  description: "个人主页、课程笔记与技术记录",
  theme,
  bundler: viteBundler(),
  extendsMarkdown: (md) => {
    md.use(MarkdownItMathjax3);
    wrapTables(md);
  },
  head: [
    [
      "style",
      {},
      `mjx-container { overflow-x: auto; overflow-y: hidden; }`,
    ],
  ],
});
