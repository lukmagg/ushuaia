import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useCounterStore = defineStore('CounterStore', () => {
  const count = ref(0)
  const name = ref('Mousito')
  
  const doubleCount = computed(() => count.value * 2)
  const myDog = computed(() => name.value)

  function increment() {
    count.value++
  }

  function changeName(newName) {
    name.value = newName
  }

  return { count, name, doubleCount, myDog, increment, changeName }
})