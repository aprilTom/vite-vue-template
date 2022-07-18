<script setup lang="ts">
const onClick = (e: any) => {
  console.log('e', e)
  console.log('import', import.meta.env)
}
</script>

<template>
  <div @click="onClick">
    home page
  </div>
</template>

<style scoped>

</style>
