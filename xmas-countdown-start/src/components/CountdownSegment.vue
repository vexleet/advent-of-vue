<script setup>
defineProps({
  label: String,
  number: Number,
})
</script>
<template>
  <div class="segment text-center">
    <div class="pt-10 overflow-hidden relative">
      <Transition name="slide">
        <span :key="number" class="numbers text-green absolute top-0 left-[50%]">{{ number }}</span>
      </Transition>
    </div>

    <span class="label block pt-2">{{ label }}</span>
  </div>
</template>
<style>
.segment {
  width: 80px;
}
.numbers {
  transform: translateX(-50%);
  font-size: 32px;
}
.label {
  font-size: 16px;
}

.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from {
  transform: translate(-50%, -50px);
}

.slide-leave-to {
  transform: translate(-50%, 50px);
}
</style>
