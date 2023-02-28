<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      intersection: {
        threshold: 0.8,
      },
    }"
    class="join-get-driva"
  >
    <div class="lg:w-6/12 xl:w-6/12">
      <h4
        class="inline-block lg:mt-[80px] leading-8 md:leading-9 lg:leading-8 text-[28px] lg:text-[24px] xl:text-[30px] xl:leading-[42px]"
      >
        Start living your life with ease using GetDriva
      </h4>
      <p class="text-sm mt-3">Join over 100 people and sign up today to enjoy early access and pairing</p>

      <div class="sm:flex mt-[36px] lg:mt-[70px]">
        <BaseButton
          size="sm"
          outline
          class="mr-4 mb-3 sm:mb-0"
          as-link
          to="/drivers"
          style="width: fit-content; background: #fff7f1"
        >
          <span class="px-4 font-medium">Hire a driver</span>
        </BaseButton>
        <BaseButton size="sm">
          <span class="px-1 font-medium">Become a driver</span>
        </BaseButton>
      </div>
    </div>

    <div class="hidden lg:flex w-6/12 xl:w-6/12 2xl:w-6/12 justify-end items-end">
      <nuxt-img class="h-0" :class="{ mockup_1: isVisible }" src="/images/mockup-lg.png"></nuxt-img>
      <nuxt-img class="h-0" :class="{ mockup_2: isVisible }" src="/images/mockup-sm.png"></nuxt-img>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isVisible = ref<boolean>(false)
const visibilityChanged = (_isVisible: boolean, entry: any) => {
  isVisible.value = _isVisible
}
</script>

<style lang="scss" scoped>
.join-get-driva {
  background: #fff7f1;
  @apply flex w-10/12 lg:h-[365px] m-auto rounded-[30px] md:rounded-[40px] px-8 sm:px-12 mb-20 md:mb-40 py-10 lg:py-0;

  @media (max-width: 599px) {
    background: url("/assets/svg/round-ball-sm.svg") no-repeat 200% 100%, #fff7f1;
  }
  @media (min-width: 600px) and (max-width: 763px) {
    background: url("/assets/svg/round-ball-sm.svg") no-repeat 110% 100%, #fff7f1;
  }
  @media (min-width: 764px) and (max-width: 1023px) {
    background: url("/assets/svg/round-ball-sm.svg") no-repeat 90% 100%, #fff7f1;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    background: url("/assets/svg/round-ball-lg.svg") no-repeat 90% 100%, #fff7f1;
  }
  @media (min-width: 1201px) {
    background: url("/assets/svg/round-ball-sm.svg") no-repeat 46% 100%,
      url("/assets/svg/round-ball-lg.svg") no-repeat 95% 100%, #fff7f1;
  }

  .mockup_1 {
    opacity: 0;
    width: 166px;
    animation: mockUpSlide1 700ms ease forwards;
  }

  .mockup_2 {
    opacity: 0;
    width: 170px;
    animation: mockUpSlide2 700ms ease forwards;
    animation-delay: 700ms;
  }

  @keyframes mockUpSlide1 {
    to {
      opacity: 1;
      height: 310px;
    }
  }

  @keyframes mockUpSlide2 {
    to {
      opacity: 1;
      height: 210px;
    }
  }
}
</style>
