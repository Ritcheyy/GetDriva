<template>
  <div class="nav w-full">
    <div class="flex items-center justify-between h-20 w-11/12 m-auto">
      <Logo />

      <div class="flex">
        <nuxt-link to="/">How it works</nuxt-link>
        <nuxt-link class="ml-6" to="/">Services</nuxt-link>
        <nuxt-link class="ml-6" to="/">About</nuxt-link>
        <nuxt-link class="ml-6" to="/">Features</nuxt-link>
      </div>

      <div class="flex items-center">
        <nuxt-link class="mr-5" to="/">Hire a driver</nuxt-link>
        <BaseButton size="md">Become a driver</BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from "~/assets/svg/logo.svg"
</script>

<style lang="scss" scoped>
.nav {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
</style>
