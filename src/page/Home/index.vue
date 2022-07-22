<script setup lang="ts">
import { onMounted } from 'vue'
import { Notify } from 'vant'
import { getDemo, getUserInfo } from '@/api/home/index'
import useCountStore from '@/store/count'

const countStore = useCountStore()

const handleRequest = () => {
  Notify({ type: 'warning', message: '提示' })
}
onMounted(() => {
  // getDemo().then((res) => {
  //   console.log('res', res)
  // })
})
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

  <!-- <van-button type="primary">button</van-button> -->

  <!-- <button @click="handleRequest">
    request
  </button> -->
</template>

<style scoped>

</style>
