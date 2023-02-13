<template>
  <div class="flex items-center justify-between w-11/12 mt-36 mb-28 m-auto">
    <div class="w-4/12">
      <h3 class="mb-7 font-bold">Moving around just got easier!</h3>
      <p class="text-sm mb-7">
        Whether you need a ride to the airport, to an important business meeting, or just a night
        out in town and you want to be in the convenience of your car, our drivers are available to
        ensure you arrive at your destination on time and in comfort.
      </p>
      <BaseButton size="md" outline>Get Started</BaseButton>
    </div>

    <div class="w-6/12 block">
      <div class="w-full flex bg-brand-100 rounded-[30px] mb-6">
        <div class="w-7/12 py-9 pl-6 pr-7">
          <h5 class="mb-5 text-xl font-bold">For Car Owners:</h5>
          <p class="text-xs leading-5">
            GetDriva is that platform where you can hire verified drivers on an on-demand, fulltime,
            or contract basis. We aggregate the best of the best drivers in Nigeria, we pair you up
            with the best around your location when you need one, and we can even help you manage
            their contracts, payments, taxes etc
          </p>
        </div>
        <div class="w-5/12"></div>
        <nuxt-img class="w-full h-full" src="/images/car-owner.png"></nuxt-img>
      </div>
      <div class="w-full flex bg-brand-blue rounded-[30px]">
        <div class="w-5/12">
          <nuxt-img class="w-full h-full" src="/images/driver.png"></nuxt-img>
        </div>
        <div class="w-7/12 pt-9 pb-5 pl-6 pr-7">
          <h5 class="mb-5 text-xl font-bold">For Drivers:</h5>
          <p class="text-xs leading-5">
            GetDriva is that platform where you can hire verified drivers on an on-demand, fulltime,
            or contract basis. We aggregate the best of the best drivers in Nigeria, we pair you up
            with the best around your location when you need one, and we can even help you manage
            their contracts, payments, taxes etc
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
