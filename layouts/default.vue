<template>
  <div>
    <AppNav />
    <slot />
    <AppFooter v-if="!hideFooter" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const hideFooter = computed(() => route.meta.hideFooter || false)
</script>
