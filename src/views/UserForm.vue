<script setup lang="ts">
import { ref } from 'vue'
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton,
  IonTitle, IonList, IonItem, IonInput, IonLabel,
  IonAvatar, modalController
} from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseErrorModal from "@/components/base/BaseErrorModal.vue";

const props = defineProps<{
  mode: "create" | "edit",
}>();

import {useLoginStore} from "@/stores/loginStore";
const loginStore = useLoginStore();

import {useRouter} from 'vue-router';
const router = useRouter();

import { useAvatars} from "@/composables/useAvatars";
const { avatars } = useAvatars();

const selectedAvatar = ref<string | undefined>(undefined);
const newUsername = ref<string | undefined>(undefined);

const startUserCreation= async (): Promise<void> => {
  if(newUsername.value && selectedAvatar.value) {
    await loginStore.createProfile(
        newUsername.value,
        selectedAvatar.value
    );
    (document.activeElement as HTMLElement)?.blur();
    await router.push({ name: 'Home' });
  } else {
    console.log("The User Creator failed, Check inputs.");
    const errorModal = await modalController.create({
      component: BaseErrorModal,
      componentProps: {
        errorMessage: "The user creation failed. Please input a name and choose an avatar."
      }
    })
    await errorModal.present();
  }
}

const startUpdateUser = async (): Promise<void> => {
  console.log("Update user");
}
const startDeleteUser = async (): Promise<void> => {
  console.log("Delete user");
}
</script>

<template>
 <base-layout>
   <div class="user-form--container">
     <ion-header class="user-form--header">
       <ion-toolbar class="user-form--toolbar">
         <ion-buttons slot="start">
           <ion-back-button default-href="/home" />
         </ion-buttons>
         <ion-title>
           Create new User
         </ion-title>
       </ion-toolbar>
     </ion-header>
     <base-button
         v-if="props.mode === 'create' && selectedAvatar && newUsername"
         @click="startUserCreation"
         btn_label="Create"
         btn_size="large"
     />
     <div class="user-form-btn-container"  v-if="props.mode === 'edit'">
       <base-button
           class="base"
           @click="startUpdateUser"
           btn_label="Update"
           btn_size="medium"
       />
       <base-button
           @click="startDeleteUser"
           btn_color="danger"
           btn_label="Delete"
           btn_size="medium"
       />
     </div>
     <ion-list class="name">
       <ion-item lines="none">
         <ion-label class="name__label">Name: </ion-label>
         <ion-input v-model="newUsername" class="name__input" placeholder=" Enter Name" required/>
       </ion-item>
     </ion-list>
     <div class="avatar-picker">
       <div class="avatar-picker__label" >
         Pick an avatar:
       </div>
       <div class="avatar-picker__avatar-group">
         <ion-avatar
             class="avatar-picker__avatar"
             v-for="avatar in avatars"
             :key="avatar.filename"
             @click="selectedAvatar = avatar.url"
             :class="{selected: selectedAvatar === avatar.url}"
         >
           <img :src="avatar.url" :alt="avatar.filename">
         </ion-avatar>
       </div>
     </div>
   </div>
 </base-layout>
</template>

<style scoped>
.user-form--container {
  padding: 2em;
}
.user-form--header, .user-form--toolbar, .name {
  border-radius: var(--ion-standard-border-radius);
}
.user-form--header {
  margin-bottom: 1.5em;
}
.user-form-btn-container {
  display: flex;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 2em;
}
.name {
  margin: 1.5em auto 2em;
  --box-shadow: 0 4px 16px rgba(0, 0, 0, 0.40);
  box-shadow: var(--box-shadow);
}
.name__label, .name__input {
  font-size: var(--font-size-medium);
  margin-right: .3em;
}
.avatar-picker__avatar-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  row-gap: 1em;
  flex-wrap: wrap;
}
.avatar-picker__label {
  margin: 1em auto 1em;
  text-align: center;
  font-size: 2em;
}
.avatar-picker__avatar {
  width: 6em;
  height: 6em;
  padding: .3em;
  background-color: var(--ion-avatar-background-color);
  transition: 500ms;
}
.avatar-picker__avatar:hover {
  background-color: var(--ion-avatar-hover-background-color);
}
.selected {
  background-color: var(--ion-avatar-selected-background-color);
}
@media screen and (min-width: 768px) {
  .name {
    max-width: 70%;
  }
  .avatar-picker__avatar {
    width: 13em;
    height: 13em;
    padding: .5em;
  }
}
@media screen and (orientation: landscape) and (min-width: 992px) {
  .user-form--container {
    margin: auto;
    max-width: 90%;
  }
}
@media screen and (orientation: portrait ) and (min-width: 992px)  {
  .user-form--container {
    margin: auto;
    max-width: 70%;
  }
}
@media only screen and (min-width: 1200px) {
  .user-form--container {
    margin: auto;
    max-width: 60%;
  }
}
</style>