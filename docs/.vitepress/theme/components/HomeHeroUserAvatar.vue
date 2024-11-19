<script setup>
import avatar from "../assets/images/avatar.png";
</script>

<template>
  <div class="home-avatar">
    <img :src="avatar" rounded-15 />
  </div>
</template>

<style lang="scss" scoped>
.home-avatar:hover {
  @apply transform scale-110 rotate-360;
}

.home-avatar {
  @apply w-30 h-30;
  @apply transition duration-800 ease-out;
  @apply rounded-15 border-2 border-solid border-gray-300;
  @apply bg-blue-2 cursor-pointer;
}
</style>
