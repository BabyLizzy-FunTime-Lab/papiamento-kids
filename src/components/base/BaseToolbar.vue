<script setup lang="ts">

import {
  IonToolbar,
  IonHeader,
  IonTitle,
  IonButtons,
  IonImg,
  IonMenuButton,
} from "@ionic/vue";

</script>

<template>
  <ion-header>
    <ion-toolbar class="toolbar">
      <ion-img
          class="toolbar__logo"
          router-link="/"
          slot="start"
          src="/logos/papiamento-kids-logo.png"
      />
      <ion-title class="toolbar__title">Papiamento Kids</ion-title>
      <ion-buttons slot="end">
        <ion-menu-button menu="toolbar-menu"></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>
.toolbar {
  height: 4em;
}
.toolbar__logo {
  height: 4em;
  border-radius: 0 var(--ion-standard-border-radius) var(--ion-standard-border-radius) 0;
  overflow: hidden;
}
</style>