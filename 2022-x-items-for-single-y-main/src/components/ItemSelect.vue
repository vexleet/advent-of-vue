<script setup>
import { ref } from 'vue'
import { useItemComparison } from '../composables/itemComparison'

defineProps({
  items: {type: Array, required: true},
  value: {required: true}
})

const selected = ref()
</script>

<template>
  <select :value="value" @input="$emit('update:value', $event.target.value)" class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option v-for="item in items" :value="item.id">{{item.title}}</option>
  </select>
</template>
