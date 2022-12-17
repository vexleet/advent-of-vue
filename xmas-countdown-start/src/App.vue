<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
import {onMounted, ref, watch} from "vue";

const now = useNow({interval: 1000})
const christmas = new Date('12/25/2022 00:00:00')

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const calculateTime = (currentTime) => {
  const diffTime = Math.abs(currentTime.getTime() - christmas.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  time.value = {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds
  }
}

onMounted(() => calculateTime(new Date()))

watch(now, newVal => calculateTime(newVal))
</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="time.days" />
          <CountdownSegment label="hours" :number="time.hours" />
          <CountdownSegment label="minutes" :number="time.minutes" />
          <CountdownSegment label="seconds" :number="time.seconds" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>
