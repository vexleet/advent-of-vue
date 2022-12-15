<script setup>
import { ref, watch } from 'vue'

const searchTerm = ref('')
const items = ref([])


const debounce = (callback) => {
  let debounceTimeout = null

  return (...args) => {
    clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(() => {
      callback.apply(this, args)
    }, 300)
  }
}

const findProducts = async term => {
  if(term === "") {
    items.value = []
    return
  }

  await fetch(`https://dummyjson.com/products/search?q=${term}`)
      .then(res => res.json())
      .then((res) => {
        items.value = res.products
      });
}

watch(searchTerm, debounce(findProducts))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <ul class="list-disc">
      <li v-for="{title, price, id} in items" :key="id">
        {{title}} - ${{price}}
      </li>
    </ul>
  </div>
</template>
