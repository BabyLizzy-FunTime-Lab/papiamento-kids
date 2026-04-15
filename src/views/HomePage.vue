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
// Get all the users so they can be rendered.
import {useLoginStore} from "@/stores/loginStore";
import {onMounted} from "vue";
const loginStore = useLoginStore();
onMounted(async() => {
  await loginStore.load();
  console.log(loginStore.profiles);
})
</script>

<style scoped>
.center-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
