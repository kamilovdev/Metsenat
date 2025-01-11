<script setup>
    import { ref } from 'vue';

    import FilterItem from '../filter/filter-item.vue';

    const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<template>
  
   <FilterItem :isOpen="isModalOpen" @close="closeModal">
            <div>
                <span>
                    <h1>Filter</h1>
                </span>
                <hr>
            </div>
        </FilterItem>
</template>

<style scoped></style>