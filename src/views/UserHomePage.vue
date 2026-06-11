<script setup lang="ts">
import {useLoginStore} from "@/stores/loginStore";
import type {Profile} from "@/types/profile";

const loginStore = useLoginStore();
const userProfile: Profile | null = loginStore.getActiveProfile;

const props = withDefaults(defineProps<{
  name?: string
}>(), {
  name: 'Guest',
})
</script>

<template>
  <base-layout>
    <div class="center-container">
      Welcome, {{ userProfile.name }}!
      <base-button
          label="Start"
          size="large"
      />
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