<script setup lang="ts">
import {computed} from "vue";
import {useLoginStore} from "@/stores/loginStore";

const loginStore = useLoginStore();
const userProfile = computed(
    () => loginStore.getActiveProfile
);

// const props = withDefaults(defineProps<{
//   name?: string
// }>(), {
//   name: 'Guest',
// })
</script>

<template>
  <base-layout>
    <div class="center-container">
      Welcome, {{ userProfile?.name ?? "Guest" }}!

    </div>
  </base-layout>
</template>

<style scoped>
  .center-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>