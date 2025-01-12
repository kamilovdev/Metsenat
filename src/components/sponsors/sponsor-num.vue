<script setup>
import Cbutton from '../Button/Cbutton.vue';
</script>

<template>
  <div class="containerMain my-5">
    <div class="flex justify-between"> <!-- Corrected class name -->
        <div>
            <p>59 tadan 1-10 ko‘rsatilmoqda</p>
        </div>

        <div class="flex gap-2">
            <p>Ko‘rsatish</p>
            <Cbutton variant="number" title="10">
                <template #suffix>
                    <span class="icon-angle-down text-[9px] text-[#1D1D1F] pl-2"></span>
                </template>
            </Cbutton>
            <div class="flex gap-2">
              <Cbutton v-for="number in 7" :key="number" :variant="'number'" :title="number.toString()">
              </Cbutton>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped></style>