<template>
  <div v-if="size >= 0">
      <ChristmasTree :size="size - 1">
        <template #default>
          <div class="flex flex-row justify-center">
            <!-- This div is styled for the tree sections, but it's not complete -->
            <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center" />
          </div>
        </template>
      </ChristmasTree>
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>
