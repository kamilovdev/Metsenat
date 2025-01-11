<script setup>
    import Capexchart from './Capexchart.vue';
</script>

<template>
    <div class="containerMain">
            <div class=" mt-7 bg-white px-6 py-6"  >
                <div class="flex flex-col gap-2">
                    <h1 class="text-[24px] font-bold text-[#2E384D]">Homiylar va talabalar soni</h1>
                    <div class="flex gap-5">
                        <div class="flex text-[12px] text-[#7A7A9D] font-normal items-center gap-2">
                            <span><img src="../../../public/dashboard/bradius.svg" alt=""></span>
                            Homiylar
                        </div>
                        <div class="flex text-[12px] text-[#7A7A9D] font-normal items-center gap-2">
                            <span><img src="../../../public/dashboard/pradius.svg" alt=""></span>
                            Talabalar
                        </div>
                    </div>
                </div>
                <Capexchart></Capexchart>
            </div>
    </div>
</template>

<style scoped></style>