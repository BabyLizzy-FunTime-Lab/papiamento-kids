<script setup lang="ts">
import {
  IonToolbar,
  IonHeader,
  IonTitle,
  IonButtons,
  IonImg,
  IonMenuButton,
  IonAvatar
} from "@ionic/vue";
import {useLoginStore} from "@/stores/loginStore";
import {computed} from "vue";

const loginStore = useLoginStore();
const userProfile = computed(
    () => loginStore.getActiveProfile
);

// const userAvatar = computed(() => userProfile.value?.avatar);
// const completedAvatarUrl = computed( () => `/src/assets/avatars/${userAvatar.value}`);
const defaultAvatar = loginStore.getDefaultAvatar;
</script>

<template>
  <ion-header class="toolbar--container">
    <ion-toolbar class="toolbar">
      <ion-img
          class="toolbar__logo"
          alt="app logo"
          router-link="/"
          slot="start"
          src="/logos/papiamento-kids-logo.png"
      />
      <ion-title class="toolbar__title">Papiamento Kids</ion-title>
      <ion-buttons slot="end">
        <ion-avatar class="toolbar__avatar">
          <img
              :src="userProfile.avatar || defaultAvatar"
              alt="avatar image"
          />
        </ion-avatar>
        <ion-menu-button menu="toolbar-menu"></ion-menu-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<style scoped>
.toolbar--container {
  background-color: var(--ion-toolbar-background);
}
.toolbar {
  height: 4em;
}
.toolbar__logo {
  height: 4em;
  border-radius: 0 var(--ion-standard-border-radius) var(--ion-standard-border-radius) 0;
  overflow: hidden;
}
.toolbar__avatar {
  height: 3em;
  width: 3em;
  border: .1em solid var(--ion-color-tertiary);
  background-color: var(--ion-color-primary);
}
@media only screen and (min-width: 1200px) {
  .toolbar {
    max-width: 65%;
    margin: auto;
  }
}
</style>