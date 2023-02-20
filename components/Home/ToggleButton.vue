<template>
  <Switch
    v-model="enabled"
    class="relative px-[6px] inline-flex items-center bg-primary-200 outline-0"
    :class="isMobile ? 'w-[250px] h-[56px] rounded-[10px] py-2' : 'w-[355px] h-[74px] rounded-[20px] py-2'"
  >
    <span
      class="z-0 w-[171px] h-[60px] absolute p-5 inline-block transform rounded-[15px] bg-primary-500 transition translate-x-0"
      :class="{
        'translate-x-[120px] sm:translate-x-[171px]': enabled,
        '!w-[118px] !h-[40px] p-0 rounded-[8px]': isMobile,
      }"
    >
    </span>
    <span
      class="w-1/2 z-10 transition text-white font-semibold"
      :class="{ '!text-dGray-base': enabled, 'text-xs': isMobile }"
    >
      For Car owners
    </span>
    <span
      class="w-1/2 z-10 transition text-dGray-base font-semibold"
      :class="{ '!text-white': enabled, 'text-xs': isMobile }"
    >
      For Drivers
    </span>
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue"
import { defineProps } from "@vue/runtime-core"

withDefaults(
  defineProps<{
    isMobile: boolean
  }>(),
  {
    isMobile: false,
  }
)

const enabled = ref<boolean>(false)
</script>
