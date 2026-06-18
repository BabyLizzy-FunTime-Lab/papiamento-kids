<script setup lang="ts">
// Get all the users so they can be rendered.
import AvatarCard from "@/components/homePage/AvatarCard.vue";
import {useLoginStore} from "@/stores/loginStore";
import {onMounted} from "vue";
const loginStore = useLoginStore();

import {useRouter} from "vue-router";
const router = useRouter();

onMounted(async() => {
  await loginStore.load();
})

const goToUserHomePage = async (id: string) =>{
  await loginStore.setActiveProfile(id);
  await router.push({name: 'UserHomePage'})
}
</script>

<template>
  <base-layout>
    <div class="center-container">
      <avatar-card
          v-for="profile of loginStore.profiles"
          :key="profile.id"
          :name="profile.name"
          :avatar="profile.avatar"
          @click="goToUserHomePage(profile.id)"
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
  justify-content: space-evenly;
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
@media only screen and (min-width: 1200px) {
  .center-container {
    max-width: var(--ion-standard-main-conatainer-width);
    margin: auto;
  }
}
</style>
