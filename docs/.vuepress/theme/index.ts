import { Theme } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { blogDataPlugin } from "./plugins/blogData";

const __dirname = getDirname(import.meta.url);

const theme: Theme = {
  name: "minimal-blog-theme",
  clientConfigFile: path.resolve(__dirname, "client.ts"),
  plugins: [
    blogDataPlugin(),
    shikiPlugin({
      themes: { light: "github-light" },
    }),
  ],
};

export default theme;
