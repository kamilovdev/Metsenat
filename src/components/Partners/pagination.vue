<script setup>
 import { defineProps } from 'vue';
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

        <div>
           <span class="flex gap-3">
              <h1 class="text-[15px] font-normal text-[#1D1D1F]">Korsatish</h1>
              <Cbutton variant="number" :title="page_size" >
                <template #suffix>
                   <i class="icon-angle-down text-[10px] cursor-pointer"></i>
                </template>
              </Cbutton>
           </span>

         
        </div>
      </div>
  </div>
</template>

<style scoped></style>