<script setup lang="ts">
import { onMounted } from 'vue'
import { getUserInfo } from '@/api/home/index'
import useCountStore from '@/store/count'

const countStore = useCountStore()
const handleRequest = () => { }
onMounted(() => {
  getUserInfo().then((res) => {
    console.log('res', res)
  })
})
</script>

<template>
  <div>count: {{ countStore.count }}</div>
  <button @click="countStore.setCount()">
    +1
  </button>

  <!-- <div>{{ data }}</div> -->
  <button @click="handleRequest">
    request
  </button>
</template>

<style scoped>

</style>
