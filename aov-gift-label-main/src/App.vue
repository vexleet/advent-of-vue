<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <div>
      <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white mb-6">
        <div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
          <img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 bg-white text-black p-2 rounded">TO: {{ toName }}</div>
            <div class="mt-2 bg-white text-black p-2 rounded">FROM: {{ fromName }}</div>
          </div>
        </div>
      </div>

      <InputField v-model:value="toName" label="To:" id="toName"/>
      <InputField v-model:value="fromName" label="From:" id="fromName"/>
    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";
import InputField from "@/components/InputField.vue";

const toName = ref('')
const fromName = ref('')
</script>
