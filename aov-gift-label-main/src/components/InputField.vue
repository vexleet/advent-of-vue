<template>
  <div class="d-block self-start">
    <label :for="id">{{ label }}</label>
    <input :value="value" @input="$emit('update:value', $event.target.value)" type="text" :id="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" >
  </div>
</template>

<script setup>
defineProps({
  label: {type: String, required: true},
  id: {type: String, required: true},
  value: {type: String, required: true}
})

defineEmits(['update:value'])
</script>

<style scoped>

</style>