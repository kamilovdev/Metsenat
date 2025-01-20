<script setup>
import { defineProps } from 'vue';

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
      <div class="flex justify-between  bg-white h-[68px] items-center px-[15px] rounded-lg mt-3">
        <span>
          <ul class="text-[15px] text-[#1D1D1F] flex gap-[33px]">
            <li class="font-normal">{{ index + 1 }}</li>
            <li class="font-medium">{{ data.full_name }}</li>
          </ul> 
        </span>

        <span>
          <ul class="text-[15px] text-[#1D1D1F] flex gap-[133px]">
            <li class="font-normal text-[14px] text-center">Bakalavr</li>
            <li class="font-medium text-[14px]">
             {{ data.institute.name }}
            </li>
            <li>{{formarPrice(data.given) }}</li>
            <li class="font-medium text-[14px]">{{formarPrice(data.contract) }}</li>
            <li class="font-normal text-[15px]">{{ data.get_status_display }}</li>
            <li><img src="../../../public/sponsor/eye.svg" alt=""></li>
          </ul>
        </span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
