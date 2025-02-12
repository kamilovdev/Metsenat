<script setup>
    import {
        defineProps
    } from 'vue';
    import Cbutton from '../Button/Cbutton.vue';

     defineProps({
        singlestudent:{
            type: Object,
            required: true
        }
     })
      const formarPrice = (value) => {
        let val = (value / 1).toFixed('UZS').replace(' ', ' ')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
</script>

<template>
    <div class="w-[790px] mt-5">
        <div class="bg-white p-8">
            <div class="flex justify-between items-center">
                <h1>Talaba haqida</h1>

                <Cbutton variant="edit" title="Tahrirlash">
                    <template #prefix>
                        <i class="icon-edit text-[20px] text-[#3365FC]"></i>
                    </template>
                </Cbutton>
            </div>

            <div class="flex flex-col gap-6">
                <span class="flex items-center space-x-2">
                    <button class="text-[#3366FF] text-[12px] font-medium bg-[#E5EBFF] px-[11px] py-[2px]">
                        Asosiy ma’lumotlar
                    </button>
                    <hr class="flex-1 border-t-2 border-[#E4E8F0]">
                </span>

                <div class="flex gap-5 items-center">
                    <span>
                        <img src="../../../public/sponsor/Avatar.svg" alt="">
                    </span>
                    <div class="w-fit">
                        <p class="font-medium text-[#212121]">{{ data.full_name }}</p>
                    </div>
                </div>

                <div>
                    <p class="text-[12px] font-medium text-[#B5B5C3]">TELEFON RAQAM</p>
                    <h1 class="text-[16px ] font-medium text-[#212121]">+998 99 973-72-60</h1>
                </div>
            </div>

            <div>
                <span class="flex items-center space-x-2">
                    <button class="text-[#3366FF] text-[12px] font-medium bg-[#E5EBFF] px-[11px] py-[2px]">
                        O‘qish joyi haqida ma’lumot
                    </button>
                    <hr class="flex-1 border-t-2 border-[#E4E8F0]">
                </span>

                <div class="">
                    <div class="flex gap-7">
                        <span>
                            <p>OTM</p>
                            <h1>O’zbekiston davlat jahon tillari universiteti</h1>
                        </span>

                        <span>
                            <p>Talabalik turi</p>
                            <h1>Bakalavr</h1>
                        </span>
                    </div>

                    <div class="flex gap-7">
                        <span>
                            <p>Ajratilingan summa</p>
                            <h1>14 000 000 UZS</h1>
                        </span>

                        <span>
                            <p>Kontrakt miqdori</p>
                            <h1>30 000 000 UZS</h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>