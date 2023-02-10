<template>
  <div class="mt-28 mb-64">
    <h4 class="w-5/12 text-center m-auto leading-9">
      We have a pool of drivers ready to meet your demands
    </h4>
    <p class="w-3/12 text-center m-auto mt-4 text-xs">
      Our drivers are vetted through a rigorous testing process so you have nothing to worry about
    </p>

    <div class="mt-14">
      <Swiper
        :slides-per-view="3.5"
        :loop="true"
        :grabCursor="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <div class="driver-card">
            <nuxt-img
              class="w-full w-[285px] m-auto mt-[-62px] rounded-full"
              src="/images/drivers/susan.png"
            />
            <h5 class="mt-4 text-base leading-5 font-semibold">Solomon Theophilus</h5>
            <p class="text-xs mt-3 flex justify-center items-center">
              <VerifiedIcon class="mr-1" /> Verified
            </p>
            <p class="text-xs mt-[6px]">Total rides: 20</p>
            <p class="text-xs mt-[6px] mb-3">4.5(20 reviews)</p>
            <nuxt-link to="/" class="text-primary-500 flex justify-center items-center">
              View <ArrowRight class="ml-1" />
            </nuxt-link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import VerifiedIcon from "@/assets/svg/verified.svg"
import ArrowRight from "@/assets/svg/arrow-right.svg"
</script>

<style lang="scss" scoped>
:deep(.swiper-wrapper) {
  padding-top: 60px;
}
.driver-card {
  @apply w-[340px] pb-6 border-[1px] border-dGray-base rounded-[15px] text-center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
