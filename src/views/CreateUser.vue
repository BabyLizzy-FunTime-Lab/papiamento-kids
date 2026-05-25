<script setup lang="ts">
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonList, IonItem, IonInput
} from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
</script>

<template>
 <base-layout>
   <ion-header>
     <ion-toolbar>
       <ion-buttons slot="start">
         <ion-back-button default-href="/home" />
       </ion-buttons>
       <ion-title>
         <h1>Create new User</h1>
       </ion-title>
     </ion-toolbar>
   </ion-header>
   <ion-list>
     <ion-item>
       <ion-input label="Name: " placeholder="Enter Name" />
     </ion-item>
     <ion-item>
       <ion-input label="Avatar: " placeholder="Select Avatar" />
     </ion-item>
   </ion-list>
 </base-layout>
</template>

<style scoped>

</style>