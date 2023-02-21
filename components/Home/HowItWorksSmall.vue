<template>
  <div id="how-it-works" class="how-it-works pb-6 sm:hidden">
    <div class="flex justify-center">
      <HomeToggleButton v-model="switchValue" is-mobile class="mt-16" />
    </div>

    <div class="w-11/12 sm:w-11/12 lg:w-9/12 flex justify-between sm:justify-center items-center m-auto mt-16 mb-4">
      <div class="w-6/12">
        <div class="mb-4" v-for="howItWorkStep in howItWorkSteps[activeTab]">
          <div class="mr-0 m-auto step-box">{{ howItWorkStep.step }}</div>
          <h6 class="text-sm font-medium text-right leading-5">{{ howItWorkStep.title }}</h6>
          <p class="text-[11px] text-right">
            {{ howItWorkStep.description }}
          </p>
        </div>
      </div>

      <nuxt-img class="w-5/12" src="/images/how-screenshot.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHowItWorkSteps } from "~/composables/howItWorkSteps"

const switchValue = ref<boolean>(false)
const activeTab = computed<string>(() => (switchValue.value ? "driver" : "carOwners"))
const howItWorkSteps = useHowItWorkSteps()
</script>

<style lang="scss" scoped>
.how-it-works {
  background-color: rgba(255, 233, 219, 0.38);
  .step-box {
    @apply flex justify-center items-center;
    @apply w-10 h-10 lg:w-16 lg:h-[60px] rounded-lg lg:rounded-[15px] bg-primary-500;
    @apply mb-2 text-2xl text-white font-semibold;
  }
}
</style>
