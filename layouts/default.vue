<template>
  <div>
    <AppNav :class="navClasses" />
    <slot />
    <AppFooter v-if="!hideFooter" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const hideFooter = computed(() => route.meta.hideFooter || false)
const navClasses = computed(() => route.meta.navClasses || '')
</script>
