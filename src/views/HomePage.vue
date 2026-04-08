<template>
  <base-layout>
    <div class="center-container">
      <base-button
          label="Start"
          size="large"
      />
    </div>
  </base-layout>
</template>

<script setup lang="ts">

import BaseButton from "@/components/base/BaseButton.vue";
</script>

<style scoped>
.center-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
