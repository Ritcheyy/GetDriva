<template>
  <div class="flex w-10/12 h-[365px] m-auto rounded-[40px] px-12 mb-40 join-get-driva">
    <div class="w-6/12">
      <h4 class="inline-block mt-[80px]">Start living your life with ease using GetDriva</h4>
      <p class="text-sm mt-2">
        Join over 100 people and sign up today to enjoy early access and pairing
      </p>

      <div class="flex mt-[70px]">
        <BaseButton size="sm" outline class="mr-4">
          <span class="px-4 font-medium">Hire a driver</span>
        </BaseButton>
        <BaseButton size="sm">
          <span class="px-1 font-medium">Become a driver</span>
        </BaseButton>
      </div>
    </div>

    <div class="w-5/12 flex justify-end items-end">
      <nuxt-img class="h-[310px]" src="/images/mockup-lg.png"></nuxt-img>
      <nuxt-img class="h-[210px]" src="/images/mockup-sm.png"></nuxt-img>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.join-get-driva {
  background: url("/assets/svg/round-ball-sm.svg") no-repeat 40% 100%,
    url("/assets/svg/round-ball-lg.svg") no-repeat 85% 100%, #fff7f1;
}
</style>
