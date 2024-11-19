<script setup>
import "css-doodle";
</script>

<template>
  <div w-full h-20 absolute bottom-0 left-0>
    <div class="wave-container">
      <div class="wave-horizontal wave-first">
        <div class="wave-item"></div>
        <div class="wave-item"></div>
      </div>
      <div class="wave-horizontal wave-second">
        <div class="wave-item"></div>
        <div class="wave-item"></div>
      </div>
      <div class="wave-horizontal wave-third">
        <div class="wave-item"></div>
        <div class="wave-item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wave-container {
  @apply w-full h-full relative overflow-hidden;
}

.wave-horizontal {
  @apply absolute top-0 left--100% w-200% h-full;
  @apply flex flex-row items-center;
  .wave-item {
    @apply w-1/2 h-full;
    background: url("../assets/images/wave4.png");
    background-size: 100% 100%;
  }
}

.wave-first {
  @apply top-0% opacity-40;
  animation: wave 47s linear infinite;
  // animation-delay: 0s;
}

.wave-second {
  @apply top-0% opacity-50;
  animation: wave 37s linear infinite;
  // animation-delay: -10s;
}

.wave-third {
  @apply opacity-60;
  animation: wave 27s linear infinite;
  // animation-delay: -20s;
}

@keyframes wave {
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(25%) translateY(50%);
  }
  100% {
    transform: translateX(50%) translateY(0);
  }
}
</style>
