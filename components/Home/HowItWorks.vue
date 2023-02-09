<template>
  <div class="how-it-works pb-6">
    <div class="flex justify-center">
      <HomeToggleButton class="mt-16" />
    </div>

    <div class="w-9/12 flex justify-center items-center m-auto mt-16">
      <div class="w-3/12">
        <div class="mb-32">
          <div class="mr-0 m-auto step-box">1</div>
          <h6 class="font-medium text-right leading-5 mb-2">
            Select your timeframe or destination
          </h6>
          <p class="text-xs text-right">
            Choose your pickup location and the time range/duration that you’ll need a driver for
          </p>
        </div>
        <div>
          <div class="mr-0 m-auto step-box">3</div>
          <h6 class="font-medium text-right leading-5 mb-2">Pay when service is rendered</h6>
          <p class="text-xs text-right">
            Pay the driver the accumulated fee either by cash or card
          </p>
        </div>
      </div>

      <nuxt-img class="w-5/12 mx-10" src="/images/how-screenshot.png" />

      <div class="w-3/12">
        <div class="mb-40">
          <div class="ml-0 m-auto step-box">2</div>
          <h6 class="font-medium text-left leading-5 mb-2">Book a driver</h6>
          <p class="text-xs text-left">GetDriva will match you with the nearest driver</p>
        </div>

        <div>
          <div class="ml-0 m-auto step-box">4</div>
          <h6 class="font-medium text-left leading-5 mb-2">Rate your driver</h6>
          <p class="text-xs text-left">
            Rate your driver according to the service rendered, you can also leave a review about
            your ride
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.how-it-works {
  background-color: rgba(255, 233, 219, 0.38);
  .step-box {
    @apply flex justify-center items-center;
    @apply w-16 h-[60px] rounded-[15px] bg-primary-500;
    @apply mb-5 text-2xl text-white font-semibold;
  }
}
</style>
