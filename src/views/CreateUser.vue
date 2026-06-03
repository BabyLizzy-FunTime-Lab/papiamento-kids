<script setup lang="ts">
import { ref } from 'vue'
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton,
  IonTitle, IonList, IonItem, IonInput, IonLabel, IonAvatar
} from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import BaseButton from "@/components/base/BaseButton.vue";

import {useLoginStore} from "@/stores/loginStore";
const loginStore = useLoginStore();

import { useAvatars} from "@/composables/useAvatars";
const { avatars } = useAvatars();
console.log(avatars);
const selectedAvatar = ref<string | undefined>(undefined);
const newUsername = ref<string | undefined>(undefined);

const startUserCreation= () => {
  if(newUsername.value && selectedAvatar.value) {
    console.log(selectedAvatar.value + " " + newUsername.value);
    loginStore.createProfile(newUsername.value, selectedAvatar.value);
  } else {
    console.log("The User Creator failed, Check inputs.")
  }
}

</script>

<template>
 <base-layout>
   <div class="create-user--container">
     <ion-header class="create-user--header">
       <ion-toolbar class="create-user--toolbar">
         <ion-buttons slot="start">
           <ion-back-button default-href="/home" />
         </ion-buttons>
         <ion-title>
           Create new User
         </ion-title>
       </ion-toolbar>
     </ion-header>
     <base-button @click="startUserCreation" btn_label="Done" btn_size="large"/>
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
             @click="selectedAvatar = avatar.filename"
             :class="{selected: selectedAvatar === avatar.filename}"
         >
           <img :src="avatar.url" :alt="avatar.filename">
         </ion-avatar>
       </div>
     </div>
   </div>
 </base-layout>
</template>

<style scoped>
.create-user--container {
  padding: 2em;
}
.create-user--header, .create-user--toolbar, .name {
  border-radius: var(--ion-standard-border-radius);
}
.create-user--header {
  margin-bottom: 1.5em;
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
  .create-user--container {
    margin: auto;
    max-width: 90%;
  }
}
@media screen and (orientation: portrait ) and (min-width: 992px)  {
  .create-user--container {
    margin: auto;
    max-width: 70%;
  }
}
@media only screen and (min-width: 1200px) {
  .create-user--container {
    margin: auto;
    max-width: 60%;
  }
}
</style>