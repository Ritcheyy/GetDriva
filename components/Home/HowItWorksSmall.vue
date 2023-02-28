<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      intersection: {
        threshold: 0.6,
      },
    }"
    id="how-it-works-m"
    class="how-it-works pb-6 sm:hidden"
  >
    <div class="flex justify-center">
      <HomeToggleButton v-model="switchValue" is-mobile class="mt-16" />
    </div>

    <div class="w-11/12 sm:w-11/12 lg:w-9/12 flex justify-between sm:justify-center items-center m-auto mt-16 mb-4">
      <div class="w-6/12 min-h-[570px]">
        <div
          class="mb-4"
          :class="{ hidden: !resetAnimation }"
          v-for="(howItWorkStep, index) in howItWorkSteps[activeTab]"
        >
          <div
            class="mr-0 m-auto step-box opacity-0"
            :class="{
              'opacity-1 animate__animated animate__fadeInUp': isVisible,
              'animate__delay-1500ms': index === 1,
              'animate__delay-3s': index === 2,
              'animate__delay-4500ms': index === 3,
            }"
          >
            {{ howItWorkStep.step }}
          </div>
          <h6
            class="text-sm font-medium text-right leading-5 opacity-0"
            :class="{
              'opacity-1 animate__animated animate__fadeInUp': isVisible,
              'animate__delay-500ms': index === 0,
              'animate__delay-2s': index === 1,
              'animate__delay-3500ms': index === 2,
              'animate__delay-5s': index === 3,
            }"
          >
            {{ howItWorkStep.title }}
          </h6>
          <p
            class="text-[11px] text-right opacity-0"
            :class="{
              'opacity-1 animate__animated animate__fadeInUp': isVisible,
              'animate__delay-1s': index === 0,
              'animate__delay-2500ms': index === 1,
              'animate__delay-4s': index === 2,
              'animate__delay-5500ms': index === 3,
            }"
          >
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

const resetAnimation = ref<boolean>(true)
const switchValue = ref<boolean>(false)
const activeTab = computed<string>(() => (switchValue.value ? "driver" : "carOwners"))

const howItWorkSteps = useHowItWorkSteps()

const isVisible = ref<boolean>(false)
const visibilityChanged = (_isVisible: boolean, entry: any) => {
  isVisible.value = _isVisible
}

let timeoutId: number
watch(switchValue, () => {
  resetAnimation.value = false
  timeoutId = setTimeout(() => (resetAnimation.value = true), 100)
})

onBeforeUnmount(() => {
  clearTimeout(timeoutId)
})
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
