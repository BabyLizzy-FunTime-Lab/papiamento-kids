<script setup lang="ts">
// Get all the users so they can be rendered.
import AvatarCard from "@/components/AvatarCard.vue";
import {useLoginStore} from "@/stores/loginStore";
import {onMounted} from "vue";
const loginStore = useLoginStore();
onMounted(async() => {
  await loginStore.load();
  console.log(loginStore.profiles);
})
</script>

<template>
  <base-layout>
    <div class="center-container">
      <avatar-card
          v-for="profile of loginStore.profiles"
          :key="profile.id"
          :name="profile.name"
          :avatar="profile.avatar"
      />
    </div>
  </base-layout>
</template>



<style scoped>
.center-container {
  padding-top: 2em;
  padding-bottom: 2em;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  row-gap: 1em;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .center-container {
    padding: 4rem;
  }
}
</style>
