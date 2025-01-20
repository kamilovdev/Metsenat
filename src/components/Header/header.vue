<script setup>
    import {
        RouterLink , 
    } from 'vue-router';
    import Cbutton from '../../components/Button/Cbutton.vue';
    import Cform from '../Form/Cform.vue';

</script>

<template>
    <div class="bg-white">
        <div class="containerMain py-[24px] flex justify-between">
            <ul class="flex border-2 w-fit border-[#E0E7FF] rounded-md ">
                <li class="border-r border-gray-300 px-[54px] py-[10px] text-[12px] font-medium hover:bg-[#3366FF] hover:text-white"
                    :class="{'bg-[#3366FF] border-[#3366FF] rounded-l-md text-white': $route.path === '/'}">
                    <RouterLink to="/">
                        Dashboard
                    </RouterLink>
                </li>
                <li class="border-r border-gray-300 px-[54px] py-[10px] text-[12px] font-medium hover:text-white hover:bg-[#3366FF] "
                    :class="{'bg-[#3366FF] border-[#3366FF]  text-white': $route.path === '/sponsor'}">
                    <RouterLink to="/sponsor">
                        Homiylar
                    </RouterLink>
                </li>
                <li class="px-[54px] py-[10px] text-[12px] font-medium hover:bg-[#3366FF] hover:text-white"
                    :class="{'bg-[#3366FF] border-[#3366FF] rounded-r-md text-white': $route.path === '/student'}">
                    <RouterLink to="/student">
                        Talabalar
                    </RouterLink>
                </li>

            </ul>

            <div class="flex gap-5">
                <Cform variant="search" title="Izlash" class="flex justify-center items-center">
                    <template #prefix>
                        <span class="icon-search"></span>
                    </template>
                </Cform>
                <Cbutton variant="filter" title="Filter">
                    <template #prefix>
                        <span class="icon-filtr text-[13px]"></span>
                    </template>
                </Cbutton>
            </div>
        </div>
    
    </div>
</template>

<style scoped></style>