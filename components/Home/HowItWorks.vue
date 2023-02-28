<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      intersection: {
        threshold: 0.6,
      },
    }"
    id="how-it-works"
    class="how-it-works pb-6 hidden sm:block"
  >
    <div class="flex justify-center pt-16">
      <HomeToggleButton v-model="switchValue" />
    </div>

    <div class="sm:w-11/12 lg:w-9/12 flex justify-center items-center m-auto mt-16 mb-4">
      <div class="w-3/12">
        <div class="mb-32" :class="{ hidden: !resetAnimation }">
          <div
            class="mr-0 m-auto step-box opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp': isVisible }"
          >
            {{ howItWorkSteps[activeTab][0].step }}
          </div>
          <h6
            class="text-sm md:text-base font-medium text-right leading-5 mb-2 opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-500ms': isVisible }"
          >
            {{ howItWorkSteps[activeTab][0].title }}
          </h6>
          <p
            class="text-xs text-right opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-1s': isVisible }"
          >
            {{ howItWorkSteps[activeTab][0].description }}
          </p>
        </div>

        <div :class="{ hidden: !resetAnimation }">
          <div
            class="mr-0 m-auto step-box opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-3s': isVisible }"
          >
            {{ howItWorkSteps[activeTab][2].step }}
          </div>
          <h6
            class="text-sm md:text-base font-medium text-right leading-5 mb-2 opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-3500ms': isVisible }"
          >
            {{ howItWorkSteps[activeTab][2].title }}
          </h6>
          <p
            class="text-xs text-right opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-4s': isVisible }"
          >
            {{ howItWorkSteps[activeTab][2].description }}
          </p>
        </div>
      </div>

      <nuxt-img class="w-5/12 mx-10" src="/images/how-screenshot.png" />

      <div class="w-3/12">
        <div class="mb-40" :class="{ hidden: !resetAnimation }">
          <div
            class="ml-0 m-auto step-box opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-1500ms': isVisible }"
          >
            {{ howItWorkSteps[activeTab][1].step }}
          </div>
          <h6
            class="text-sm md:text-base font-medium text-left leading-5 mb-2 opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-2s': isVisible }"
          >
            {{ howItWorkSteps[activeTab][1].title }}
          </h6>
          <p
            class="text-xs text-left opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-2500ms': isVisible }"
          >
            {{ howItWorkSteps[activeTab][1].description }}
          </p>
        </div>

        <div :class="{ hidden: !resetAnimation }">
          <div
            class="ml-0 m-auto step-box opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-4500ms': isVisible }"
          >
            {{ howItWorkSteps[activeTab][3].step }}
          </div>
          <h6
            class="text-sm md:text-base font-medium text-left leading-5 mb-2 opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-5s': isVisible }"
          >
            {{ howItWorkSteps[activeTab][3].title }}
          </h6>
          <p
            class="text-xs text-left opacity-0"
            :class="{ 'opacity-1 animate__animated animate__fadeInUp animate__delay-5500ms': isVisible }"
          >
            {{ howItWorkSteps[activeTab][3].description }}
          </p>
        </div>
      </div>
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
    @apply mb-5 text-2xl text-white font-semibold;
  }
}
</style>
