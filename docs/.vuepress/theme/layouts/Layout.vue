<script setup lang="ts">
import { usePageFrontmatter, usePageData, RouteLink } from "vuepress/client";
import { computed } from "vue";
import Home from "./Home.vue";
import Archive from "./Archive.vue";
import Friends from "./Friends.vue";
import Post from "./Post.vue";
import { useLocale } from "../composables/useLocale";

const frontmatter = usePageFrontmatter<{ page?: string }>();
const page = usePageData();
const { t, homePath, switchPath } = useLocale();

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
        <RouteLink :to="homePath" class="site-name">Zirno_81</RouteLink>
        <nav class="nav-links">
          <RouteLink :to="homePath">{{ t.nav.home }}</RouteLink>
          <RouteLink to="/archive.html">{{ t.nav.archive }}</RouteLink>
          <RouteLink to="/friends.html">{{ t.nav.friends }}</RouteLink>
          <RouteLink
            :to="switchPath"
            class="lang-switch"
            :title="t.languageSwitch.title"
            :aria-label="t.languageSwitch.title"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <circle
                cx="8"
                cy="8"
                r="6.4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                d="M1.6 8h12.8M8 1.6c1.7 1.8 2.6 4 2.6 6.4S9.7 12.6 8 14.4C6.3 12.6 5.4 10.4 5.4 8S6.3 3.4 8 1.6Z"
              />
            </svg>
            <span>{{ t.languageSwitch.label }}</span>
          </RouteLink>
        </nav>
      </div>
    </header>
    <main class="content-wrapper">
      <component :is="innerComponent" />
    </main>
    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} Zirno_81</p>
    </footer>
  </div>
</template>

<style>
@import "../styles/global.css";
</style>
