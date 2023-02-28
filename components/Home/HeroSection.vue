<template>
  <div
    class="hero w-full pt-20 pb-[200px] sm:pb-[300px] md:pb-[300px] lg:pb-[400px] xl:pb-[450px] 2xl:pb-[500px] text-center relative"
  >
    <HomeHeroSectionTitle />
    <p
      class="w-10/12 text-xs md:text-base sm:w-8/12 md:w-6/12 lg:w-7/12 lg:w-5/12 m-auto font-light text-black lg:leading-5"
    >
      GetDriva provides you with trusted and reliable drivers to get you to your destination with ease
    </p>

    <div class="flex justify-center mt-8">
      <BaseButton class="hidden md:flex mr-4" size="lg" outline as-link to="/drivers">Hire a driver</BaseButton>
      <BaseButton class="hidden md:flex" size="lg">Become a driver</BaseButton>

      <BaseButton class="md:hidden mr-2" size="sm" outline as-link to="/drivers">Hire a driver</BaseButton>
      <BaseButton class="md:hidden" size="sm">Become a driver</BaseButton>
    </div>

    <div class="flex justify-center">
      <nuxt-img class="image-lg hidden lg:block lg:w-6/12 2xl:w-6/12 absolute bottom-0" src="/images/screenshot.png" />
      <nuxt-img class="w-8/12 sm:w-7/12 md:w-6/12 lg:hidden absolute bottom-0" src="/images/screenshot-sm.png" />
    </div>

    <LeftBubble class="hidden lg:block left-bubble absolute left-0 bottom-24" />
    <RightBubble class="hidden lg:block right-bubble absolute right-0 top-44" />
  </div>
</template>

<script lang="ts" setup>
import LeftBubble from "@/assets/svg/left-bubble.svg"
import RightBubble from "@/assets/svg/right-bubble.svg"
</script>

<style lang="scss" scoped>
.hero {
  background: rgba(255, 233, 219, 0.4);
  @media screen and (min-width: 2000px) {
    padding-bottom: 700px;
    .image-lg {
      width: 35% !important;
    }
  }
}

.left-bubble {
  animation-name: bubbleLeftIn;
  animation-duration: 1s;
  animation-timing-function: linear;
}

.right-bubble {
  animation-name: bubbleRightIn;
  animation-duration: 1s;
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
