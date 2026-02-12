<script setup lang="ts">
import { usePageFrontmatter, usePageData } from "vuepress/client";
import { computed } from "vue";
import Home from "./Home.vue";
import Archive from "./Archive.vue";
import Friends from "./Friends.vue";
import Post from "./Post.vue";

const frontmatter = usePageFrontmatter<{ page?: string }>();
const page = usePageData();

const innerComponent = computed(() => {
  const p = frontmatter.value.page;
  if (p === "home") return Home;
  if (p === "archive") return Archive;
  if (p === "friends") return Friends;
  if (p === "post") return Post;
  if (page.value.path.startsWith("/posts/")) return Post;
  return Home;
});
</script>

<template>
  <div class="site">
    <header class="navbar">
      <div class="navbar-inner">
        <a href="/" class="site-name">My Blog</a>
        <nav class="nav-links">
          <a href="/">主页</a>
          <a href="/archive.html">归档</a>
          <a href="/friends.html">友链</a>
        </nav>
      </div>
    </header>
    <main class="content-wrapper">
      <component :is="innerComponent" />
    </main>
    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} My Blog</p>
    </footer>
  </div>
</template>

<style>
@import "../styles/global.css";
</style>
