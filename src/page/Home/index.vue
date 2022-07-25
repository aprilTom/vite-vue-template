<script setup lang="ts">
import { onMounted } from 'vue'
import { Notify } from 'vant'
import { getDemo, getUserInfo } from '@/api/home/index'
import axios from '@/utils/request'
import useCountStore from '@/store/count'

const countStore = useCountStore()

const handleRequest = () => {
  Notify({ type: 'warning', message: '提示' })
}
onMounted(() => {
  axios({
    url: 'local/admin/user/info',
    params: { id: '1234' },
  }).then((res) => {
    console.log('222 res', res)
  })
  // getDemo({ id: '1235' }).then((res) => {
  //   console.log('getDemo/res', res)
  // }).catch(err => {
  //   console.log('getDemo/err', err);
  // })
})
onMounted(() => {
  // getUserInfo().then((res) => {
  //   console.log('res', res)
  // })
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
