import { defineClientConfig } from "vuepress/client";
import Layout from "./layouts/Layout.vue";
import Home from "./layouts/Home.vue";
import Archive from "./layouts/Archive.vue";
import Friends from "./layouts/Friends.vue";
import Post from "./layouts/Post.vue";

export default defineClientConfig({
  layouts: {
    Layout,
    Home,
    Archive,
    Friends,
    Post,
    NotFound: Layout,
  },
});
