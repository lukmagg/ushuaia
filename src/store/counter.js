import { defineStore } from 'pinia'



export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Mousito')
  const doubleCount = computed(() => count.value * 2)
  const myDog = computed(() => name.value)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, myDog, increment }
})