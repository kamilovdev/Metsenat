<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import client from '../api/api';
import singleHeader from '../components/Header/singleHeader.vue';
import sponsorSingle from '../components/sponsors/sponsorSingle.vue';
const route = useRoute();
const singleSponsor = ref({});

const fetchSingleSponsor = async () => {
  const { data } = await client.get(`sponsor-detail/${route.params.id}`);
console.log(data);
  singleSponsor.value = data;
};

onMounted(() => {
  fetchSingleSponsor();
});
</script>

<template>
  <div>
    <singleHeader :singleSponsor="singleSponsor" />
    <sponsorSingle :singleSponsor="singleSponsor" />

  </div>
</template>
