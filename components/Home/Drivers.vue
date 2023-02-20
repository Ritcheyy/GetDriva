<template>
  <div class="mt-16 md:mt-28 mb-20 md:mb-64">
    <h4 class="w-10/12 sm:w-8/12 lg:w-6/12 xl:w-5/12 text-center m-auto leading-7 lg:leading-9 text-2xl lg:text-[32px]">
      We have a pool of drivers ready to meet your demands
    </h4>
    <p class="w-10/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 text-center m-auto mt-4 text-xs">
      Our drivers are vetted through a rigorous testing process so you have nothing to worry about
    </p>

    <div class="mt-10 md:mt-14">
      <Swiper
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :breakpoints="breakpoints"
        :creative-effect="creativeEffect"
        :effect="'creative'"
        :grabCursor="true"
        slides-offset-before="20"
      >
        <SwiperSlide v-for="slide in 6" :key="slide">
          <div class="driver-card">
            <nuxt-img
              class="w-full w-[200px] lg:w-[250px] xl:w-[285px] m-auto mt-[-62px] rounded-full"
              src="/images/drivers/susan.png"
            />
            <h5 class="mt-4 text-base leading-5 font-semibold">Solomon Theophilus</h5>
            <p class="text-xs mt-3 flex justify-center items-center"><VerifiedIcon class="mr-1" /> Verified</p>
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

const breakpoints = ref<any>({
  320: {
    slidesPerView: 1,
    spaceBetween: -70,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: -140,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 100,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  2300: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
})

const creativeEffect = ref<any>({
  prev: {
    shadow: false,
    translate: ["-20%", 0, -1],
  },
  next: {
    translate: ["100%", 0, 0],
  },
})
</script>

<style lang="scss" scoped>
:deep(.swiper-wrapper) {
  padding-top: 60px;
}
.driver-card {
  @apply w-[280px] md:w-[300px] lg:w-[340px] pb-6 border-[1px] border-dGray-base rounded-[15px] text-center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
