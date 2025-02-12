<script setup>
  import {
    defineProps
  } from 'vue';

  const props = defineProps({
    data: Array,
    index: Number
  })
  const formarPrice = (value) => {
    let val = (value / 1).toFixed('UZS').replace(' ', ' ')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }
</script>

<template>
  <div>
    <RouterLink :to="`/student/${data.id}`">
      <div
        class="w-[1490px] h-[68px] hover:bg-[#eeeeee] mt-[12px] bg-white rounded-[8px] flex justify-start items-center">
        <div class="w-[50px] px-3 py-2 text-left text-[rgba(29,29,31,1)] font-medium text-[15px] leading-[21px">
          {{ index + 1 }}</div>
        <div class="w-[290px] px-3 py-2 text-left text-[#292d32] font-medium text-[15px] leading-[21px]">
          {{ data.full_name }}</div>
        <div class="flex ml-[190px] items-center">
          <div class="w-[160px] px-3 py-2 text-left text-[#292d32] font-medium text-[14px] leading-[21px]">
            {{ data.type == 1 ? 'Bakalavr' : 'Magistr' }}</div>
          <div class="w-[200px] px-3 py-2 text-center text-[#292d32] font-medium text-[14px] leading-[21px]">
            {{ data.institute['name'] }}</div>
          <div class="ml-[50px] w-[150px] px-3 py-2 text-left text-[#292d32] font-medium text-[14px] leading-[21px]">
            {{formarPrice(data.given) }} <span class="text-[rgba(178,183,193,1)] font-medium text-[14px]"> UZS</span>
          </div>
          <div class="ml-[112px] w-[150px] px-3  py-2 text-left text-[#292d32] font-medium text-[14px] leading-[21px]">
            {{formarPrice(data.contract) }} <span class="text-[rgba(178,183,193,1)] font-medium text-[14px]"> UZS</span>
          </div>
          <div class="ml-[23px]">
          </div>
          <button>
            <img class="ml-[65px]" src="../../../public/sponsor/eye.svg" alt="">
          </button>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>