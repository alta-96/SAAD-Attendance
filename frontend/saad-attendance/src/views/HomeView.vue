//home view

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import SocketioService from '../services/socketio.service'
import { ref, nextTick, onMounted, watch, computed ,reactive, isReactive} from 'vue'
/*
onMounted(() => {
  
})

const example = ref('hello');

exmaple.value = 'new text'


const myfunction = ((String param) => {

})

myfunction("hello")

const result = SocketioService.FunctionName(params)

*/

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
