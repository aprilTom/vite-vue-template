<script setup lang="ts">
import { onMounted } from 'vue'
import { getDemo } from '@/api/home/index'
import useCountStore from '@/store/count'

const countStore = useCountStore()

onMounted(() => {
  getDemo({ addr: 'sh' }).then((res) => {
    console.log('getDemo/res', res)
  }).catch((err) => {
    console.log('getDemo/err', err)
  })
})
</script>

<template>
  <div>count: {{ countStore.count }}</div>
  <button @click="countStore.setCount()">
    +1
  </button>
</template>

<style scoped>

</style>
