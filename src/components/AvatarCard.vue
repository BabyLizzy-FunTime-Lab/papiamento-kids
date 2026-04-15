<script setup lang="ts">
import {
  IonCard, IonCardHeader, IonCardTitle
} from '@ionic/vue';

import defaultAvatar from '@/avatars/shoco-avatar.png';

const props = defineProps<{
  name?: string
  avatar?: string
}>()

</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-avatar>
        <img alt="Silhouette of a person's head" :src="props.avatar || defaultAvatar" />
      </ion-avatar>
      <ion-card-title>{{ props.name || 'Guest' }}</ion-card-title>
    </ion-card-header>
  </ion-card>
</template>

<style scoped>

</style>