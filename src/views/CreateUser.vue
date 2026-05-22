<script setup lang="ts">
import {
  IonHeader, IonList, IonItem, IonInput
} from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
</script>

<template>
 <base-layout>
   <ion-header>
     <h1>Create new User</h1>
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