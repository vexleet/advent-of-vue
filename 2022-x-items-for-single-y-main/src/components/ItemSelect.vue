<script setup>
import { ref } from 'vue'

defineProps({
  items: {type: Array, required: true},
  value: {required: true}
})
</script>

<template>
  <select
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      class="p-2 border-2 border-gray-dark">
    <option disabled value="">Select an item</option>
    <option v-for="item in items" :value="item.id">{{item.title}} - ${{item.price}}</option>
  </select>
</template>
