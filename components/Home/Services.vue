<template>
  <div id="services" class="services">
    <div
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true,
        intersection: {
          threshold: 0.8,
        },
      }"
      class="xl:w-4/12 lg:w-4/12 sm:w-8/12 w-11/12 lg:mt-0 mt-10"
    >
      <h3
        class="text-3xl lg:h3 mb-4 lg:mb-7 font-bold opacity-0"
        :class="{ 'opacity-1 animate__animated animate__fadeInDown': isVisible }"
      >
        Moving around just got easier!
      </h3>
      <p
        class="text-sm mb-4 sm:mb-7 opacity-0"
        :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-500ms': isVisible }"
      >
        Whether you need a ride to the airport, to an important business meeting, or just a night out in town and you
        want to be in the convenience of your car, our drivers are available to ensure you arrive at your destination on
        time and in comfort.
      </p>
      <BaseButton size="sm" outline class="sm:hidden" style="background: white">Get Started</BaseButton>
      <BaseButton size="md" outline class="hidden sm:flex" style="background: white">Get Started</BaseButton>
    </div>

    <div class="sm:flex xl:w-6/12 2xl:w-5/12 2xl:m-auto lg:w-7/12 lg:block">
      <div
        class="w-full flex flex-col flex-col-reverse lg:flex-row bg-brand-100 rounded-[20px] sm:rounded-[30px] lg:mb-6 mr-0 sm:mr-2 lg:mr-0"
      >
        <div class="lg:w-7/12 lg:py-9 lg:pl-6 lg:pr-7 p-6">
          <h5 class="lg:mb-5 mb-4 text-lg md:text-xl font-bold">For Car Owners:</h5>
          <p class="text-xs leading-5">
            GetDriva is that platform where you can hire verified drivers on an on-demand, fulltime, or contract basis.
            We aggregate the best of the best drivers in Nigeria, we pair you up with the best around your location when
            you need one, and we can even help you manage their contracts, payments, taxes etc
          </p>
        </div>
        <div class="lg:w-5/12">
          <nuxt-img
            class="w-full h-full object-cover rounded-[20px] sm:rounded-[30px]"
            src="/images/car-owner.png"
          ></nuxt-img>
        </div>
      </div>

      <div
        class="w-full flex flex-col lg:flex-row bg-brand-blue rounded-[20px] sm:rounded-[30px] ml-0 sm:ml-2 mt-9 lg:ml-0 sm:mt-0"
      >
        <div class="lg:w-5/12">
          <nuxt-img
            class="w-full h-full object-cover rounded-[20px] sm:rounded-[30px]"
            src="/images/driver.png"
          ></nuxt-img>
        </div>
        <div class="lg:w-7/12 lg:pt-9 lg:pb-5 lg:pl-6 lg:pr-7 p-6">
          <h5 class="lg:mb-5 mb-4 text-lg md:text-xl font-bold">For Drivers:</h5>
          <p class="text-xs leading-5">
            GetDriva is that platform where you can hire verified drivers on an on-demand, fulltime, or contract basis.
            We aggregate the best of the best drivers in Nigeria, we pair you up with the best around your location when
            you need one, and we can even help you manage their contracts, payments, taxes etc
          </p>
        </div>
      </div>
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
.services {
  @apply flex flex-col flex-col-reverse lg:flex-row items-center justify-between w-11/12 sm:w-11/12 lg:pt-36 md:pt-20 pt-16 mb-20 md:mb-28 m-auto;
}
</style>
