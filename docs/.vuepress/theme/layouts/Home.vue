<script setup lang="ts">
import { usePageData, withBase, Content } from "vuepress/client";

const page = usePageData();
</script>

<template>
  <div class="home-layout">
    <div class="avatar-wrapper">
      <img class="avatar" :src="withBase('/avatar.png')" alt="avatar" />
    </div>
    <div class="home-content">
      <Content />
    </div>
  </div>
</template>
