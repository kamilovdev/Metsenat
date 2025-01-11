<script setup>
import client from '../../api/api';
  import {
    onMounted,
    ref
  } from 'vue'

  let sponsorResult = ref({})
  const GetPay = async () => {
    try {
      const response = await client.get('sponsor-list/')
      sponsorResult.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    GetPay()
  })
</script>

<template>
    
</template>

<style scoped></style>