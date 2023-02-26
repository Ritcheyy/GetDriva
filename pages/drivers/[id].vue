<template>
  <div class="driver-profile-wrapper pt-16 pb-20 sm:pt-0 sm:pb-0">
    <div class="driver-profile">
      <div class="sm:w-5/12 sm:mr-8 lg:mr-12">
        <nuxt-img class="w-full" src="/images/drivers/main.png" />
      </div>
      <div class="mt-8 sm:mt-0 sm:w-7/12">
        <h5
          class="w-full sm:w-[290px] text-lg sm:text-xl font-medium mb-4 sm:mb-8 pb-1 sm:pb-2 border-b-[1px] border-[#818181]"
        >
          <span class="label">Name: </span>Thomas Okoro
        </h5>
        <p class="flex items-center"><span class="label mr-1">Status: </span> Verified <VerifiedIcon class="ml-1" /></p>
        <p><span class="label">Age:</span> 34</p>
        <p><span class="label">Rating:</span> 4.5/5.0</p>
        <p><span class="label">Miles driven: </span> 200,000</p>
        <p><span class="label">National Driver’s license:</span> Valid ✅</p>
        <p><span class="label">Fluent Languages:</span> English, Pidgin, Yoruba</p>
        <p><span class="label">Cars Driven:</span> Benz, Ford, BMW, Toyota</p>
        <BaseButton class="w-full sm:w-[99px] h-9 text-sm mt-8 sm:mt-0" size="xs">Hire</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VerifiedIcon from "@/assets/svg/verified.svg"

definePageMeta({
  hideFooter: true,
})
</script>

<style scoped lang="scss">
.driver-profile-wrapper {
  background: url("/assets/svg/driver-bg.svg") no-repeat top left;
  @media screen and (max-width: 640px) {
    background: url("/assets/svg/driver-bg_sm.svg") no-repeat top left;
  }
}
.driver-profile {
  min-height: calc(100vh - 80px);
  @apply w-9/12 sm:w-11/12 lg:w-10/12 m-auto sm:flex items-center;
}
.label {
  @apply text-gray-500;
}
p {
  @apply mb-4 sm:text-lg sm:mb-6 leading-6;
}
</style>
