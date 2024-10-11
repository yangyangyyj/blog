<script setup>
import { useData } from "vitepress";

const { frontmatter, site } = useData();

console.log(frontmatter, site);

const {
  customTitle,
  customText,
  hero: { actions },
} = frontmatter.value;

const { base } = site.value;
console.log(base);
</script>

<template>
  <div class="home-container">
    <h1>{{ customTitle || "Default customHomeTitle" }}</h1>
    <p>{{ customText || "Default customHomeText" }}</p>
  </div>

  <!-- 此处将渲染 markdown 内容 -->
  <Content />

  <div v-for="action in actions" :key="action.text">
    <a :href="`${base.slice(0, -1)}${action.link}`">{{ action.text }}</a>
  </div>
</template>
