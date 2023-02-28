<template>
    <h1
      class="w-11/12 sm:w-8/12 md:w-7/12 text-3xl leading-8 pt-[85px] lg:w-10/12 xl:w-8/12 2xl:w-6/12 lg:text-[64px] m-auto mb-4 md:pt-[106px] lg:leading-[72px]"
    >
      Trusted and Experienced
      <span class="driver-text-wrapper">
        <span class="driver-text"> drivers </span>
        <svg
          class="lineSvg"
          width="242"
          height="36"
          viewBox="0 0 242 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line class="line" y1="18" x2="242" y2="18" stroke="rgba(255, 122, 1, 0.5)" />
        </svg>
      </span>
      at your service
    </h1>
</template>

<style lang="scss" scoped>
h1 {
  position: relative;
  z-index: 10;
}
.driver-text-wrapper {
  position: relative;
  .lineSvg {
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: -7px;
    @media screen and (max-width: 1023px) {
      bottom: -8px;
      left: -2px;
      width: 113px;
    }

    .line {
      stroke-width: 36px;
      stroke-dasharray: 242;
      stroke-dashoffset: 242;
      animation: draw 2s ease forwards;
      animation-delay: 1s;
      @media screen and (max-width: 1023px) {
        stroke-width: 36px;
      }
    }
  }
}


@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
