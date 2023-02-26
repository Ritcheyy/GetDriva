<template>
  <div class="drivers">
    <div class="mb-[100px] lg:mb-[250px] w-11/12 lg:w-10/12 m-auto">
      <h5 class="text-center text-2xl mt-16 lg:mt-24 mb-16 w-10/12 text-center mx-auto">
        Hire a driver from GetDriva today!
      </h5>

      <div class="driver-cards flex flex-wrap">
        <div v-for="driver in drivers" :key="driver.id" class="w-full sm:w-6/12 lg:w-4/12 mt-16 mb-12">
          <div class="driver-card m-auto">
            <nuxt-img class="w-10/12 lg:w-[250px] xl:w-[285px] m-auto mt-[-62px] rounded-full" :src="driver.image" />
            <h5 class="mt-4 text-base leading-5 font-semibold">{{ driver.name }}</h5>
            <p class="text-xs mt-3 flex justify-center items-center"><VerifiedIcon class="mr-1" /> Verified</p>
            <p class="text-xs mt-[6px]">Total rides: {{ driver.totalRides }}</p>
            <p class="text-xs mt-[6px] mb-3">{{ driver.rating.toFixed(1) }} ({{ driver.reviewsCount }} reviews)</p>
            <nuxt-link :to="`/drivers/${driver.id}`" class="text-primary-500 flex justify-center items-center">
              View <ArrowRight class="ml-1" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <HomeJoinGetDriva />
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid"
import { Drivers } from "~/types"
import VerifiedIcon from "@/assets/svg/verified.svg"
import ArrowRight from "@/assets/svg/arrow-right.svg"

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
</script>

<style lang="scss" scoped>
.driver-card {
  @apply w-[280px] md:w-[300px] lg:w-[340px] pb-6 border-[1px] border-dGray-base rounded-[15px] text-center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
