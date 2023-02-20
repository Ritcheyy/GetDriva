<template>
  <div class="w-10/12 md:w-11/12 m-auto mb-10">
    <div class="app-footer pb-7 md:pb-16 md:flex items-center md:justify-between">
      <Logo />

      <div class="flex justify-between mt-6 md:mt-0">
        <nuxt-link to="/" class="text-sm md:text-base md:mr-7 font-normal transition duration-300">
          How it works
        </nuxt-link>
        <nuxt-link to="/" class="text-sm md:text-base md:mr-7 font-normal transition duration-300">Services</nuxt-link>
        <nuxt-link to="/" class="text-sm md:text-base md:mr-7 font-normal transition duration-300">About</nuxt-link>
        <nuxt-link to="/" class="text-sm md:text-base font-normal transition duration-300">Features</nuxt-link>
      </div>

      <div class="flex mt-6 md:mt-0">
        <Instagram class="hover:text-primary-400 cursor-pointer transition duration-300 mr-7" />
        <LinkedIn class="hover:text-primary-400 cursor-pointer transition duration-300 mr-7" />
        <Facebook class="hover:text-primary-400 cursor-pointer transition duration-300 mr-7" />
        <Twitter class="hover:text-primary-400 cursor-pointer transition duration-300" />
      </div>
    </div>

    <div class="flex justify-between mt-6 md:mt-9">
      <p>Privacy policy</p>
      <p>© GetDriva</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from "~/assets/svg/logo-lg.svg"
import Instagram from "~/assets/svg/instagram.svg"
import LinkedIn from "~/assets/svg/linkedin.svg"
import Facebook from "~/assets/svg/facebook.svg"
import Twitter from "~/assets/svg/twitter.svg"
</script>

<style scoped lang="scss">
.app-footer {
  border-bottom: 0.6px solid #191a1c;
}
</style>
