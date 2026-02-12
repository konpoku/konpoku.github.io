<script setup lang="ts">
import { usePageFrontmatter, usePageData, RouteLink } from "vuepress/client";
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
        <RouteLink to="/" class="site-name">Zirno_81's Blog</RouteLink>
        <nav class="nav-links">
          <RouteLink to="/">主页</RouteLink>
          <RouteLink to="/archive.html">归档</RouteLink>
          <RouteLink to="/friends.html">友链</RouteLink>
        </nav>
      </div>
    </header>
    <main class="content-wrapper">
      <component :is="innerComponent" />
    </main>
    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} Zirno_81's Blog</p>
    </footer>
  </div>
</template>

<style>
@import "../styles/global.css";
</style>
