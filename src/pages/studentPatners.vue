<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import client from '../api/api';
// import singleHeader from '../components/Header/singleHeader.vue';
import studentSingle from '../components/students/studentSingle.vue';
const route = useRoute();
const singlestudent = ref({});

const fetchSinglestudent = async () => {
  const { data } = await client.get(`student-detail/${route.params.id}`);
console.log(data);
  singlestudent.value = data;
};

onMounted(() => {
  fetchSinglestudent();
});

</script>

<template>
  <div>
    <!-- <singleHeader :singlestudent="singlestudent" /> -->
    <studentSingle :singlestudent="singlestudent" />

  </div>
</template>
