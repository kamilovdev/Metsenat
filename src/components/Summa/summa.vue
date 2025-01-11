<script setup>
  import summaItem from './summa-item.vue';
  import client from '../../api/api'
  import {
    onMounted,
    ref
  } from 'vue'

  let dashboardResult = ref({})
  const GetPay = async () => {
    try {
      const response = await client.get('dashboard/')
      dashboardResult.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    GetPay()
  })
</script>

<template>
  <div class="flex gap-7 justify-center">
    <summaItem :totalAmount="`${dashboardResult.total_paid}`" currency="UZS" img="/dashboard/blueMoney.svg"
      total="Jami to‘langan summa"/>


    <summaItem :totalAmount="`${dashboardResult.total_paid}`" currency="UZS" img="/dashboard/yellowMoney.svg"
      total="Jami so‘ralgan summa" />


    <summaItem :totalAmount="`${dashboardResult.total_paid}`" currency="UZS" img="/dashboard/chocoMoney.svg"
      total="To‘lanishi kerak summa" />

  </div>
</template>

<style scoped></style>