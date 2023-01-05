<script setup>
import {useItemComparison} from "@/composables/itemComparison";
import {ref, watch} from "vue";

const {globalState} = useItemComparison()

const text = ref('You can get <strong>n</strong> <em>X items</em> for about the same price as a single <em>Y item</em>')

watch(globalState, (newValue) => {
  const {xItemId, yItemId} = newValue

  if(xItemId && yItemId) {
    if(xItemId === yItemId) {
      text.value  = 'These are the same items'
      return
    }

    const xItem = globalState.items.find((item) => item.id == xItemId)
    const yItem = globalState.items.find((item) => item.id == yItemId)

    const [expensiveItem, cheapItem] = xItem.price > yItem.price ? [xItem, yItem] : [yItem, xItem]

    const canBuy = Math.floor(expensiveItem.price / cheapItem.price)

    text.value = `You can get <strong>${canBuy}</strong> <em>${cheapItem.title} items</em> for about the same price as a single <em>${expensiveItem.title} item</em>`
  }

})

</script>
<template>
  <p class="mx-5 text-center" v-html="text"></p>
</template>
