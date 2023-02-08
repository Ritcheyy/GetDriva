<template>
  <nuxt-link
      v-if="asLink"
      :class="[
      size,
      {
        'w-full block': full,
        'inline-flex items-center': !!($slots.prefix || $slots.suffix),
        disabled,
        outline,
        secondary,
      },
    ]"
      class="btn"
  >
    <span v-if="$slots.prefix" class="-ml-1 mr-2">
      <slot name="prefix" />
    </span>
    <slot />
    <span v-if="$slots.suffix" class="-mr-1 ml-2">
      <slot name="suffix" />
    </span>
  </nuxt-link>
  <button
      v-else
      :class="[
      size,
      {
        'w-full': full,
        disabled,
        outline,
        secondary,
        loading,
      },
    ]"
      :disabled="disabled"
      :type="type"
      class="btn"
  >
    <Loader />
    <span v-if="$slots.prefix" class="-ml-1 mr-2">
      <slot name="prefix" />
    </span>
    <slot />
    <span v-if="$slots.suffix" class="-mr-1 ml-2">
      <slot name="suffix" />
    </span>
  </button>
</template>
<script lang="ts">
export default {
  name: 'FormButton',
}
</script>
<script lang="ts" setup>
// create props with interface, and set props default values
withDefaults(
    defineProps<{
      type?: 'button' | 'submit' | 'reset'
      size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
      full?: boolean
      secondary?: boolean
      disabled?: boolean
      loading?: boolean
      outline?: boolean
      asLink?: boolean
    }>(),
    {
      type: 'button',
      size: 'sm',
      full: false,
      disabled: false,
      loading: false,
      outline: false,
      asLink: false,
    }
)
</script>
