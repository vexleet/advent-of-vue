<template>
  <div class="w-full h-full flex justify-center items-center">
    <div v-if="joke.setup" class="d-flex flex-col w-[320px]">
      <div class="bg-[#115E59] px-3 py-4 rounded-xl mb-3 w-3/4">
        <p class="text-white">
          {{joke.setup}}
        </p>
      </div>
      <div v-if="jokeHasDelivered" class="bg-[#991B1B] px-3 py-4 rounded-xl w-3/4 ml-auto">
        <p class="text-white">
          {{joke.delivery}}
        </p>
      </div>
      <button
          class="text-center w-full rounded-xl bg-[#42B883] mt-3 py-2"
          @click="handleButtonClick">
        {{jokeHasDelivered ? 'Another' :'Tell Me!'}}
      </button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";

const joke = reactive({
  setup: '',
  delivery: ''
})
const jokeHasDelivered = ref(false)

const handleButtonClick = () => {
  if(jokeHasDelivered.value) {
    jokeHasDelivered.value = false
    fetchAndPrepareJoke()
  } else {
    jokeHasDelivered.value = true
  }
}

const fetchAndPrepareJoke = () => {
  joke.setup = ''
  joke.delivery = ''

  fetch('https://v2.jokeapi.dev/joke/christmas')
      .then((res) => res.json())
      .then((res) => {
        joke.setup = res.setup
        joke.delivery = res.delivery
      })
}

onMounted(fetchAndPrepareJoke)
</script>
