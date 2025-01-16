<script setup>
  import {
    defineProps
  } from 'vue';
  import Cbutton from '../Button/Cbutton.vue';
  defineProps({
    partners: Object,
    page: Number,
    page_size: Number,
    totalPages: Array
  })
</script>


<template>
<div class="containerMain">
  <div class="flex justify-between my-5">
    <div class="text-[15px] font-normal text-[#1D1D1F]">
      <h1>{{ partners.count }} tadan {{ page }} - {{ page_size }} ko'rsatilmoqda</h1>
    </div>

    <div class="flex">
      <span class="flex gap-3">
        <h1 class="text-[15px] font-normal text-[#1D1D1F]">Korsatish</h1>
        <Cbutton variant="number" :title="page_size">
          <template #suffix>
            <i class="icon-angle-down text-[10px] cursor-pointer"></i>
          </template>
        </Cbutton>
      </span>

      <div v-for="page in totalPages" :key="page" class="flex gap-3">
        <button class="text-[15px] font-normal text-[#1D1D1F] bg-[#FFFFFF] px-1 py-[5] w-fit border border-[#DFE3E8] rounded-[4px] flex items-center gap-[8px]" v-if="(Math.abs(page - pageNumber) <= 3) || (page <= 5)">
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped></style>