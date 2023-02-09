<template>
  <Switch
    v-model="enabled"
    class="relative px-[6px] py-2 inline-flex w-[355px] h-[74px] items-center rounded-[20px] bg-primary-200"
  >
    <span
      class="z-0 w-[171px] h-[60px] absolute p-5 inline-block transform rounded-[15px] bg-primary-500 transition"
      :class="enabled ? 'translate-x-[172px]' : 'translate-x-0'"
    >
    </span>
    <span
      class="w-1/2 z-10 transition text-white font-semibold"
      :class="{ '!text-dGray-base': enabled }"
    >
      For Car owners
    </span>
    <span
      class="w-1/2 z-10 transition text-dGray-base font-semibold"
      :class="{ '!text-white': enabled }"
    >
      For Drivers
    </span>
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue"

const enabled = ref(false)
</script>
