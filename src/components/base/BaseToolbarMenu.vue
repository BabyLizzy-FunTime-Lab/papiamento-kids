<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  menuController,
} from '@ionic/vue';

import {useRouter} from 'vue-router';
import {useLoginStore} from "@/stores/loginStore";
import {computed} from "vue";
const router = useRouter();

import {useParentGateModal} from "@/composables/useParentGateModal";
const {openParentGateModal} = useParentGateModal();

const loginStore = useLoginStore();
const userProfile = computed(
    () => loginStore.getActiveProfile
);

const closeMenu = async () => {
  await menuController.close('toolbar-menu');
}

const parentGateModal = async (view: string) => {
  if (await openParentGateModal()) {
    // console.log(`Hello, ${data}!`);
    await closeMenu();
    await router.push({ name: view });
  }
};
</script>

<template>
  <ion-menu menu-id="toolbar-menu" side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title class="toolbar-menu__title">Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list class="toolbar-menu__list" lines="none">
        <ion-item button @click="parentGateModal('UserProfile')">
          <ion-label>User Profile: {{ userProfile?.name ?? "Guest" }} </ion-label>
        </ion-item>
        <ion-item button @click="parentGateModal('CreateUpdateUser')">
          <ion-label>Create User</ion-label>
        </ion-item>
        <ion-item button @click="parentGateModal('Settings')">
          <ion-label>Settings</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <base-button @click="closeMenu" label="Close" size="large" />
  </ion-menu>
</template>

<style scoped>
.toolbar-menu__title, .toolbar-menu__list {
  padding: 0;
}
.toolbar-menu__title{
  padding-left: 0.8em;
}
</style>