import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import MarkdownItMathjax3 from "markdown-it-mathjax3";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "My Blog",
  description: "一个极简风格的博客",
  theme,
  bundler: viteBundler(),
  extendsMarkdown: (md) => {
    md.use(MarkdownItMathjax3);
  },
  head: [
    [
      "style",
      {},
      `mjx-container { overflow-x: auto; overflow-y: hidden; }`,
    ],
  ],
});
