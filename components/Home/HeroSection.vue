<template>
  <div class="hero w-full h-[840px] text-center relative">
    <h1 class="w-8/12 m-auto mb-3 pt-[106px] leading-[72px]">Trusted and Experienced drivers at your service</h1>
    <p class="w-5/12 m-auto font-light text-black leading-5">
      GetDriva provides you with trusted and reliable drivers to get you to your destination with ease
    </p>

    <div class="flex justify-center mt-8">
      <BaseButton size="lg" outline class="mr-4">Hire a driver</BaseButton>
      <BaseButton size="lg">Become a driver</BaseButton>
    </div>

    <div class="flex justify-center">
      <nuxt-img class="w-6/12 absolute bottom-0" src="/images/screenshot.png" />
    </div>

    <LeftBubble class="left-bubble absolute left-0 bottom-24" />
    <RightBubble class="right-bubble absolute right-0 top-44" />
  </div>
</template>

<script lang="ts" setup>
import LeftBubble from "@/assets/svg/left-bubble.svg"
import RightBubble from "@/assets/svg/right-bubble.svg"
</script>

<style lang="scss" scoped>
.hero {
  background: rgba(255, 233, 219, 0.38);
}

.left-bubble {
  animation-name: bubbleLeftIn;
  animation-duration: 500ms;
  animation-timing-function: linear;
}

.right-bubble {
  animation-name: bubbleRightIn;
  animation-duration: 500ms;
  animation-timing-function: linear;
}

@keyframes bubbleLeftIn {
  from {
    transform: translateX(-70px) translateY(96px);
    opacity: 0.2;
  }
  to {
    transform: translateX(0px) translateY(0);
    opacity: 1;
  }
}

@keyframes bubbleRightIn {
  from {
    //transform: translateX(-200px) translateY(100px);
    transform: translateX(80px) translateY(-96px);
    opacity: 0.2;
  }
  to {
    //transform: translateX(-70px) translateY(176px);
    transform: translateX(0px) translateY(0px);
    opacity: 1;
  }
}
</style>
