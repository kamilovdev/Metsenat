<script setup>
    import Cbutton from '../Button/Cbutton.vue';
    import { defineProps } from 'vue';

const props = defineProps({
  data: Object,
  index: Number
})
</script>

<template>
    <div class="bg-[#FFFFFF] w-[793px] py-6 px-8" style="box-shadow: 0px 5px 40px 0px #00000008;">
        <div class="flex flex-col gap-8">
            <span class="flex justify-between items-center">
                <h1 class="text-[24px] font-bold text-[#28293D]">Homiy haqida</h1>
                <Cbutton variant="edit" title="Tahrirlash">
                    <template #prefix>
                        <i class="icon-edit text-[20px] text-[#3365FC]"></i>
                    </template>
                </Cbutton>
            </span>
    
            <div class="flex flex-col gap-6">
                <div class="flex gap-5 items-center">
                    <span>
                        <img src="../../../public/sponsor/Avatar.svg" alt="">
                    </span>
                    <div class="w-[163px]">
                        <p class="font-medium text-[#212121]">{{ data.full_name }}</p>
                    </div>
                </div>
    
                <div class="flex gap-[227px]">
                    <div>
                        <p class="text-[12px] font-medium text-[#B5B5C3]">TELEFON RAQAM</p>
                        <h1 class="text-[16px ] font-medium text-[#212121]">{{ data.phone }}</h1>
                    </div>
    
                    <div>
                        <p class="text-[12px] font-medium text-[#B5B5C3]">HOMIYLIK SUMMASI</p>
                        <h1 class="text-[16px ] font-medium text-[#212121]">{{data.sum}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>