<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/CounterStore'
import { storeToRefs } from 'pinia'

defineProps({
  msg: String,
})

const count = ref(0)

const CounterStore = useCounterStore()

/* 
  El método storeToRefs se usa para convertir propiedades reactivas del store en referencias reactivas (ref), 
  pero no funciona para las funciones, que ya son reactivas de por sí. 
*/
const { myDog } = storeToRefs(CounterStore)  // getters must be destructured with storeToRefs

const { changeName, increment } = CounterStore  // actions musn`t be destructured with storeToRefs

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="changeName('Mousito Maggio')">name is {{ myDog }}</button>
    <p>
      hola
      {{ myDog }}
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
