<script setup lang="ts">
import { usePageFrontmatter } from "vuepress/client";

interface FriendLink {
  name: string;
  url: string;
  desc: string;
}

const frontmatter = usePageFrontmatter<{ friends: FriendLink[] }>();
</script>

<template>
  <div class="friends-layout">
    <h1>友链</h1>
    <div class="friends-grid">
      <a
        v-for="friend in frontmatter.friends"
        :key="friend.name"
        :href="friend.url"
        target="_blank"
        rel="noopener"
        class="friend-card"
      >
        <span class="friend-name">{{ friend.name }}</span>
        <p class="friend-desc">{{ friend.desc }}</p>
      </a>
    </div>
  </div>
</template>
