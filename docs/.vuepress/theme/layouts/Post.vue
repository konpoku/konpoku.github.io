<script setup lang="ts">
import { usePageFrontmatter, usePageData } from "vuepress/client";
import { Content } from "vuepress/client";

const frontmatter = usePageFrontmatter<{ date?: string }>();
const page = usePageData();

function formatDate(date?: string) {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
</script>

<template>
  <article class="post-layout">
    <h1 class="post-title">{{ page.title }}</h1>
    <p v-if="frontmatter.date" class="post-date">{{ formatDate(frontmatter.date) }}</p>
    <div class="post-content">
      <Content />
    </div>
  </article>
</template>
