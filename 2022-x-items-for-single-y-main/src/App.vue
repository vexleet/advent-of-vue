<script setup>
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import {useItemComparison} from "@/composables/itemComparison";
import {onMounted, watch} from "vue";

const {setItems, globalState, compareItems} = useItemComparison()

onMounted(() => {
  fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setItems(res.products));
})

watch(globalState, compareItems)
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect v-model:value="globalState.xItemId" :items="globalState.items"/>
      <ItemSelect v-model:value="globalState.yItemId" :items="globalState.items"/>
    </div>
    <ComparisonSummary />
  </div>
</template>
