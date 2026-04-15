<script setup lang="ts">
import { ref } from 'vue';
const title = ref<string>('BaseLayout');
import {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonImg,
    IonFooter,
    IonIcon
} from "@ionic/vue";
import { ellipsisHorizontal, ellipsisVertical, } from 'ionicons/icons';

</script>

<template>
<ion-page>
  <ion-header>
    <ion-toolbar class="toolbar">
      <ion-img
          class="toolbar__logo"
          router-link="/"
          slot="start"
          src="/logos/papiamento-kids-logo.png"
      />
      <ion-title slot="" class="toolbar__title">Papiamento Kids</ion-title>
      <ion-buttons slot="end">
        <ion-button>
          <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <slot></slot>
  </ion-content>
  <ion-footer class="adds-container">
    Footer only does adds
  </ion-footer>
</ion-page>
</template>

<style scoped>
.toolbar {
  height: 4em;
}
.toolbar__logo {
  height: 4em;
}
.adds-container {
  background-color: darkcyan;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>