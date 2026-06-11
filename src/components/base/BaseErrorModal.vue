<script setup lang="ts">

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
  modalController
} from "@ionic/vue";

const props = withDefaults(defineProps<{
  errorMessage?: string
}>(), {
  errorMessage: 'Something went wrong.',
})

const closeModal = () => {
  modalController.dismiss();
}

</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Oops!! Something happend.</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="closeModal" :strong="true">OK</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-text>
      {{ props.errorMessage }}
    </ion-text>
  </ion-content>
</template>

<style scoped>

</style>