<script setup>
  import {
    defineProps,
    ref
  } from 'vue';
  import Cbutton from '../Button/Cbutton.vue';
  defineProps({
    partners: Object,
    page: Number,
    page_size: Number,
    totalPages: Array
  })



  const limitshowopen = ref(false);
  const page_size = ref(10);


  const toggleLimitShow = () => {
    limitshowopen.value = !limitshowopen.value;
  };

  const limitPageSize = [
    {id: 1 , num: 1},
    {id: 2 , num: 2},
    {id: 3 , num: 3},
    {id: 4 , num: 4},
    {id: 5 , num: 5},
    {id: 6 , num: 6},
    {id: 7 , num: 7},
    {id: 8 , num: 8},
    {id: 9 , num: 9},
    {id: 10 , num: 10},
  ]
</script>


<template>
  <div class="containerMain">
    <div class="flex justify-between my-5">
      <div class="text-[15px] font-normal text-[#1D1D1F]">
        <h1>{{ partners.count }} tadan {{ page }} - {{ page_size }} ko'rsatilmoqda</h1>
      </div>

      <div class="flex">
        <h1 class="text-[15px] font-normal text-[#1D1D1F] pr-2">Korsatish</h1>
        <div class="flex flex-col relative">
          <span class="flex gap-3">
           <Cbutton variant="number" :title="page_size" @click="toggleLimitShow">
             <template #suffix>
               <i class="icon-angle-down text-[10px] cursor-pointer"></i>
             </template>
           </Cbutton>
         </span>
 
         <div v-if="limitshowopen" class="absolute top-6 text-center" >
         <div class=" show-limit">
           <ul class="flex flex-col gap-2 bg-white  rounded-[4px]" v-for="limit in limitPageSize" :key="limit.id">
              <li class="border-t border-b px-3 hover:border-[#3366FF] cursor-pointer transition-all duration-300" @click="$emit('onChangePageSize', limit.num)">{{ limit.num }}</li>
           </ul>
         </div> 
         </div>
       </div> 

        <div v-for="page in totalPages" :key="page" class="flex gap-3">
          <button
            class="text-[15px] font-normal text-[#1D1D1F] bg-[#FFFFFF] px-1 py-[5] w-fit border border-[#DFE3E8] rounded-[4px] flex items-center gap-[8px]"
            v-if="(Math.abs(page - pageNumber) <= 3) || (page <= 5)">
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show-limit{
  overflow: scroll;
  height: 100px;
}

.show-limit::-webkit-scrollbar-track {
  background: transparent;
}

.show-limit::-webkit-scrollbar {
  width: 2px !important;
}
</style>