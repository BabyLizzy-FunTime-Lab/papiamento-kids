<script setup lang="ts">
import {
  IonCard, IonCardHeader, IonCardTitle, IonAvatar
} from '@ionic/vue';
import { ref } from 'vue';

const props = defineProps<{
  name?: string
  avatar?: string
}>()
const completedAvatarUrl = `/avatars/${props.avatar}`;
const defaultAvatar = '/avatars/shoco-avatar.png';
const imageSrc = ref(completedAvatarUrl || defaultAvatar );
const handleAvatarError = () => {
  imageSrc.value = defaultAvatar;
}


</script>

<template>
  <ion-card class="avatar-card">
    <ion-avatar>
      <img
          :src="imageSrc"
          @error="handleAvatarError"
          alt="Avatar image"
      />
    </ion-avatar>
    <ion-card-header>
      <ion-card-title>{{ props.name || 'Guest' }}</ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<style scoped>
.avatar-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 14em;
  height: 14em;
  padding: 2em;
}
@media (min-width: 768px) {
  .avatar-card {
    padding: 0.5em;
  }
}
</style>