<script setup>
import summaItem from './summa-item.vue';
import client from '../../api/api'
import { onMounted, ref } from 'vue'

let dashboardResult = ref({})

const GetPay = async () => {
  try {
    const data = await client.get('dashboard/')
    dashboardResult.value = data.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  GetPay()
})

</script>

<template>
    <div>
      <summaItem
        iconClass="icon-money"
        :totalAmount="`${dashboardResult.total_paid}`"
        currency="UZS"
      />

      <summaItem
        iconClass="icon-money"
        :totalAmount="`${dashboardResult.total_need}`"
        currency="UZS"
      />

      <summaItem
        iconClass="icon-money"
        :totalAmount="`${dashboardResult.total_must_pay}`"
        currency="UZS"
      />
    </div>
  </template>

<style scoped></style>