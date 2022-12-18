<script setup>
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import {useItemComparison} from "@/composables/itemComparison";
import {onMounted, watch} from "vue";

const {setItems, globalState} = useItemComparison()

onMounted(() => {
  fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setItems(res.products));
})

watch(globalState, console.log)
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Select items to compare</h1>
    <div class="flex flex-col gap-5 justify-center">
      <ItemSelect :value="globalState.xItem"  :items="globalState.items"/>
      <ItemSelect :value="globalState.yItem" :items="globalState.items"/>
    </div>
    {{globalState.xItem}}
    <ComparisonSummary />
  </div>
</template>
