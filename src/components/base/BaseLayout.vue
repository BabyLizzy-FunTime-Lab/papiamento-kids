<script setup lang="ts">
import { ref } from 'vue';
const title = ref<string>('BaseLayout');
import {
  IonPage,
  IonContent,
  IonFooter,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonMenu,
  menuController,
  modalController
} from "@ionic/vue";
import BaseToolbar from "@/components/base/BaseToolbar.vue";
import BaseParentGateModal from "@/components/base/BaseParentGateModal.vue";

const openParentGateModal = async () => {
  const modal = await modalController.create({
    component: BaseParentGateModal,
  });

  await modal.present();

  const { data, role } = await modal.onWillDismiss();

  if (role === 'confirm') {
    console.log(`Hello, ${data}!`);
  }
};

const closeMenu = async () => {
  await menuController.close('toolbar-menu');
}

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
        <ion-item button @click="openParentGateModal">
          <ion-label>Create User</ion-label>
        </ion-item>
        <ion-item button @click="openParentGateModal">
          <ion-label>Settings</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <base-button @click="closeMenu" label="Close" size="large" />
  </ion-menu>
<ion-page id="main-content">
  <base-toolbar/>
  <ion-content>
    <slot></slot>
  </ion-content>
  <ion-footer class="adds-container">
    Footer only does adds
  </ion-footer>
</ion-page>
</template>

<style scoped>
.adds-container {
  background-color: darkcyan;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toolbar-menu__title, .toolbar-menu__list {
  padding: 0;
}
.toolbar-menu__title{
  padding-left: 0.8em;
}

</style>