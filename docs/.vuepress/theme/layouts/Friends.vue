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
    <ul class="friends-list">
      <li v-for="friend in frontmatter.friends" :key="friend.name" class="friend-item">
        <a :href="friend.url" target="_blank" rel="noopener" class="friend-name">{{ friend.name }}</a>
        <p class="friend-desc">{{ friend.desc }}</p>
      </li>
    </ul>
  </div>
</template>
