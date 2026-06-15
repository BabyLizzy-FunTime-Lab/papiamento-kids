<script setup lang="ts">
import BaseLayout from "@/components/base/BaseLayout.vue";
import {useLoginStore} from "@/stores/loginStore";
import {computed} from "vue";

const loginStore = useLoginStore();
const userProfile = computed(() => loginStore.getActiveProfile);

</script>

<template>
<base-layout>
  User Profile of {{ userProfile.name }}
</base-layout>
</template>

<style scoped>

</style>