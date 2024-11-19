<script setup>
import HomeBackground from "../components/HomeBackground.vue";

import { useData } from "vitepress";
import NotFound from "./NotFound.vue";
import Home from "./Home.vue";
import Page from "./Page.vue";

const { page, frontmatter } = useData();
</script>

<template>
  <div class="layout-container">
    <NotFound v-if="page.isNotFound" />
    <Home v-if="frontmatter.layout === 'home'" />
    <Page v-else />

    <HomeBackground />
  </div>
</template>
