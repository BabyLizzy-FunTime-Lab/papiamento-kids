<script setup lang="ts">
import { ref } from 'vue'
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton,
  IonTitle, IonList, IonItem, IonInput, IonLabel, IonAvatar
} from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import { useAvatars} from "@/composables/useAvatars";
const { avatars } = useAvatars();
console.log(avatars);
const selectedAvatar = ref<string | undefined>(undefined);

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
     <ion-list class="name-input">
       <ion-item lines="none">
         <ion-label class="name-input__label">Name: </ion-label>
         <ion-input placeholder=" Enter Name" />
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
.create-user--toolbar, .name-input {
  border-radius: 1em;
}
.name-input {
  margin: 2em auto 2em;
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
  margin: 1em auto 1.5em;
  text-align: center;
  font-size: 2em;
}
.avatar-picker__avatar {
  width: 13em;
  height: 13em;
  padding: .5em;
  background-color: deepskyblue;
}
.selected {
  background-color: limegreen;
}
@media (min-width: 768px) {
  .name-input {
    max-width: 70%;
  }
}
</style>