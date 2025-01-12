<script setup>
  import {RouterLink} from 'vue-router'
  import { defineProps, } from 'vue';

  const props = defineProps({
    data: Object,
    index: Number
  })
</script>

<template>
  <div>
    <RouterLink to="/sponsorSingle">
      <div class="flex justify-between bg-white h-[68px] items-center px-[15px] rounded-lg mt-3">
        <span>
          <ul class="text-[15px] text-[#1D1D1F] flex gap-[33px]">
            <li class="font-normal">{{ index + 1 }}</li>
            <li class="font-medium">{{ data.full_name }}</li>
          </ul>
        </span>

        <span>
          <ul class="text-[15px] text-[#1D1D1F] flex gap-[64px]">
            <li class="font-normal text-[14px] w-[135px] text-center">{{ data.phone }}</li>
            <li class="font-medium text-[14px]">
              <vue3-autocounter :startAmount="0" :endAmount="data.sum" :duration="1" ref="counter" :decimals="0" separator=" "/>
              <span class="text-[14px] text-[#B1B1B8]">UZS</span>
            </li>
            <li>{{ data.spent }}</li>
            <li class="font-medium text-[14px]">{{ data.created_at.split("T")[0] }}</li>
            <li class="font-normal text-[15px]">{{ data.get_status_display }}</li>
            <li><img src="../../../public/sponsor/eye.svg" alt=""></li>
          </ul>
        </span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
