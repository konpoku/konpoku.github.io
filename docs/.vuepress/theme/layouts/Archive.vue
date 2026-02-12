<script setup lang="ts">
import { ref, computed } from "vue";
import { RouteLink } from "vuepress/client";
import { posts } from "@temp/blog/posts.js";

const currentPage = ref(1);
const pageSize = 10;

const totalPages = computed(() => Math.ceil(posts.length / pageSize));

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return posts.slice(start, start + pageSize);
});

interface GroupedMonth {
  label: string;
  posts: typeof posts;
}

const groupedByMonth = computed<GroupedMonth[]>(() => {
  const groups: Record<string, typeof posts> = {};
  for (const post of pagedPosts.value) {
    const d = new Date(post.date as string);
    const key = post.date ? `${d.getFullYear()}年${d.getMonth() + 1}月` : "未分类";
    if (!groups[key]) groups[key] = [];
    groups[key].push(post);
  }
  return Object.entries(groups).map(([label, posts]) => ({ label, posts }));
});

function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function goPage(n: number) {
  if (n >= 1 && n <= totalPages.value) currentPage.value = n;
}
</script>

<template>
  <div class="archive-layout">
    <h1>归档</h1>
    <div v-for="group in groupedByMonth" :key="group.label" class="archive-group">
      <h2 class="archive-month">{{ group.label }}</h2>
      <ul class="archive-list">
        <li v-for="post in group.posts" :key="post.path" class="archive-item">
          <RouteLink :to="post.path" class="archive-title">{{ post.title }}</RouteLink>
          <span class="archive-date">{{ formatDate(post.date as string) }}</span>
        </li>
      </ul>
    </div>
    <div v-if="totalPages > 1" class="pagination">
      <button :disabled="currentPage <= 1" @click="goPage(currentPage - 1)">上一页</button>
      <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
      <button :disabled="currentPage >= totalPages" @click="goPage(currentPage + 1)">下一页</button>
    </div>
  </div>
</template>
