<template>
  <nav class="nav w-full z-20" :class="{ active: isFixedVersion }">
    <div class="flex items-center justify-between h-16 lg:h-20 w-11/12 m-auto">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>

      <div class="hidden lg:flex">
        <nuxt-link to="/#services" class="transition duration-300">Services</nuxt-link>
        <nuxt-link class="ml-6 transition duration-300" to="/#how-it-works">How it works</nuxt-link>
        <nuxt-link class="ml-6 transition duration-300" to="/#drivers">Drivers</nuxt-link>
      </div>

      <div class="hidden lg:flex items-center">
        <nuxt-link class="mr-5" to="/drivers">Hire a driver</nuxt-link>
        <BaseButton size="md">Become a driver</BaseButton>
      </div>

      <button
        type="button"
        class="h-10 w-10 flex justify-center items-center rounded-full outline-0 hover:bg-gray-200 transition duration-300 lg:hidden"
      >
        <MobileToggle />
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import Logo from "~/assets/svg/logo-sm.svg"
import MobileToggle from "~/assets/svg/mobile-toggle.svg"

const scrollPosition = ref(0)
const isFixedVersion = computed(() => scrollPosition.value >= 120)

function handleScroll() {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  background: transparent;
  transition: all .2s linear;
  &.active {
    background: white;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
