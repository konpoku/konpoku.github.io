import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import MarkdownItMathjax3 from "markdown-it-mathjax3";
import theme from "./theme";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Zirno_81的博客",
  description: "而那未曾谋面的故事仍在继续",
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
