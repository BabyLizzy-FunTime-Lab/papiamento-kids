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
  modalController
} from '@ionic/vue';
import BaseParentGateModal from "@/components/base/BaseParentGateModal.vue";

import {useRouter} from 'vue-router';
const router = useRouter();

const closeMenu = async () => {
  await menuController.close('toolbar-menu');
}

const openParentGateModal = async (view: string) => {
  const modal = await modalController.create({
    component: BaseParentGateModal,
  });

  await modal.present();

  const { role } = await modal.onWillDismiss();

  if (role === 'confirm') {
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
        <ion-item button @click="openParentGateModal('CreateUser')">
          <ion-label>Create User</ion-label>
        </ion-item>
        <ion-item button @click="openParentGateModal('Settings')">
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