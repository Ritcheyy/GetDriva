<template>
  <div
    class="flex w-10/12 lg:h-[365px] m-auto rounded-[30px] md:rounded-[40px] px-10 sm:px-12 mb-20 md:mb-40 join-get-driva py-10 lg:py-0"
  >
    <div class="lg:w-6/12 xl:w-6/12">
      <h4
        class="inline-block lg:mt-[80px] leading-8 md:leading-9 lg:leading-8 text-[28px] lg:text-[24px] xl:text-[30px] xl:leading-[42px]"
      >
        Start living your life with ease using GetDriva
      </h4>
      <p class="text-sm mt-3">Join over 100 people and sign up today to enjoy early access and pairing</p>

      <div class="sm:flex mt-[36px] lg:mt-[70px]">
        <BaseButton size="sm" outline class="mr-4 mb-3 sm:mb-0" as-link to="/drivers" style="width: fit-content">
          <span class="px-4 font-medium">Hire a driver</span>
        </BaseButton>
        <BaseButton size="sm">
          <span class="px-1 font-medium">Become a driver</span>
        </BaseButton>
      </div>
    </div>

    <div class="hidden lg:flex w-6/12 xl:w-6/12 2xl:w-4/12 justify-end items-end">
      <nuxt-img class="h-[310px]" src="/images/mockup-lg.png"></nuxt-img>
      <nuxt-img class="h-[210px]" src="/images/mockup-sm.png"></nuxt-img>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.join-get-driva {
  background: #fff7f1;
  @media (min-width: 1024px) and (max-width: 1200px) {
    background: url("/assets/svg/round-ball-lg.svg") no-repeat 90% 100%, #fff7f1;
  }
  @media (min-width: 1201px) {
    background: url("/assets/svg/round-ball-sm.svg") no-repeat 46% 100%,
      url("/assets/svg/round-ball-lg.svg") no-repeat 95% 100%, #fff7f1;
  }
}
</style>
