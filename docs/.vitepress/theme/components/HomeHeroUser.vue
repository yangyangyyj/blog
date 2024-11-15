<script setup>
import { ref, unref } from "vue";
import { useData } from "vitepress";
import HomeHeroUserAvatar from "./HomeHeroUserAvatar.vue";

const { site } = useData();
const { title, description } = site.value;

const userRef = ref();
const userContentRef = ref();

function handleMouseMove(event) {
  const rect = unref(userRef).getBoundingClientRect();

  let calcY = (event.clientX - rect.x - rect.width / 2) / 40;
  let calcX = ((event.clientY - rect.y - rect.height / 2) / 20) * -1;

  unref(userContentRef).style.transform = `rotateY(${calcY}deg) rotateX(${calcX}deg)`;
}

function handleMouseLeave() {
  unref(userContentRef).style.transform = "rotateX(0deg) rotateY(0deg)";
}
</script>

<template>
  <div class="home-hero-user" h-120 pt-16 flex="~ col justify-center items-center">
    <div ref="userRef" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" preserve-3d perspective-1000>
      <div ref="userContentRef" class="home-hero-user-content">
        <HomeHeroUserAvatar />
        <div ml-10 flex="~ col justify-center">
          <div text="8 #333" lh-8 font-bold>{{ title }}</div>
          <div text="4 #666" lh-4 mt-4>{{ description }}</div>
          <div text="4 #333" lh-4 mt-4>文章 32 | 关注 123 | 浏览量 456</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-hero-user {
  background: url("../assets/images/bg-space.jpg");
  @apply bg-no-repeat bg-cover;

  .home-hero-user-content {
    @apply w-150 h-60 p-4;
    @apply flex flex-row items-center justify-center;
    @apply rounded-5 border-2 border-solid border-#eee;
    @apply bg-white/30;
    @apply backdrop-blur-sm backdrop-saturate-150 preserve-3d;
    @apply transition-transform duration-100 ease;
  }
}
</style>
