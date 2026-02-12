import { Plugin } from "vuepress";

export const blogDataPlugin = (): Plugin => ({
  name: "blog-data-plugin",
  async onPrepared(app) {
    const posts = app.pages
      .filter((page) => page.path.startsWith("/posts/"))
      .map((page) => ({
        title: page.title,
        date: page.frontmatter.date || "",
        path: page.path,
      }))
      .sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date as string).getTime() - new Date(a.date as string).getTime();
      });

    await app.writeTemp(
      "blog/posts.js",
      `export const posts = ${JSON.stringify(posts, null, 2)};`
    );
  },
});
