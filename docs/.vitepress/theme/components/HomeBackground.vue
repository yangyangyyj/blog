<template>
  <div class="home-background"></div>
</template>

<style lang="scss" scoped>
.home-background {
  @apply h-screen w-[calc(100vw-6px)] fixed left-0 top-0 z--1;
  background: url("../assets/images/bg-main.svg");
  @apply bg-cover bg-center bg-no-repeat;
}
</style>
