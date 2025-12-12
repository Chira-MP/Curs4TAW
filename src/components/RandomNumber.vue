<script setup>
import { ref } from 'vue'

const randomNumber = ref(null)
const updateRandomNumber = () => {
  randomNumber.value = Math.random()
}
</script>

<template>
<hr>
<h3>Display a random number</h3>
<button @click="updateRandomNumber">Get a random number {{ randomNumber }}</button>
<br> 
<div v-if="randomNumber && randomNumber >= 0.5">Number is big</div>
<div v-else-if="randomNumber">Number is small</div>
</template>