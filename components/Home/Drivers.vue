<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      intersection: {
        threshold: 0.9,
      },
    }"
    id="drivers"
    class="pt-16 md:pt-28 mb-20 md:mb-36"
  >
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
        :slides-offset-before="20"
      >
        <SwiperSlide v-for="driver in drivers" :key="driver.id">
          <div class="driver-card">
            <nuxt-img class="w-10/12 lg:w-[250px] xl:w-[285px] m-auto mt-[-62px] rounded-full" :src="driver.image" />
            <h5 class="mt-4 text-base leading-5 font-semibold">{{ driver.name }}</h5>
            <p class="text-xs mt-3 flex justify-center items-center"><VerifiedIcon class="mr-1" /> Verified</p>
            <p class="text-xs mt-[6px]">Total rides: {{ driver.totalRides }}</p>
            <p class="text-xs mt-[6px] mb-3">{{ driver.rating.toFixed(1) }} ({{ driver.reviewsCount }} reviews)</p>
            <nuxt-link :to="`/drivers/${driver.id}`" class="text-primary-500 flex justify-center items-center">
              View <ArrowRight class="ml-1" />
            </nuxt-link>
          </div>
        </SwiperSlide>
      </Swiper>

      <nuxt-link
        to="/drivers"
        class="mt-8 text-primary-500 flex justify-center items-center"
        :class="{ 'animate__animated animate__pulse animate__repeat-3 animate__delay-500ms': isVisible }"
      >
        View All Drivers <ArrowRight class="ml-1" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid"
import { Drivers } from "~/types"
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

const drivers = ref<Drivers>([
  {
    id: uuidv4(),
    name: "Emmanuel Thomas",
    image: "/images/drivers/solomon.png",
    verified: true,
    totalRides: 20,
    rating: 4.2,
    reviewsCount: 20,
  },
  {
    id: uuidv4(),
    name: "Susan Gill",
    image: "/images/drivers/susan2.png",
    verified: true,
    totalRides: 50,
    rating: 4.9,
    reviewsCount: 31,
  },
  {
    id: uuidv4(),
    name: "Jeph Johnson",
    image: "/images/drivers/emmanuel.png",
    verified: true,
    totalRides: 91,
    rating: 4.1,
    reviewsCount: 56,
  },
  {
    id: uuidv4(),
    name: "Solomon Theo",
    image: "/images/drivers/fine-lady.png",
    verified: true,
    totalRides: 10,
    rating: 5.0,
    reviewsCount: 6,
  },
  {
    id: uuidv4(),
    name: "Desmond Harry",
    image: "/images/drivers/emmanuel.png",
    verified: true,
    totalRides: 88,
    rating: 4.0,
    reviewsCount: 80,
  },
])

const isVisible = ref<boolean>(false)
const visibilityChanged = (_isVisible: boolean, entry: any) => {
  isVisible.value = _isVisible
}
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
