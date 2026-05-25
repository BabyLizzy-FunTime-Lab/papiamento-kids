<template>
  <ion-app>
    <BaseToolbarMenu/>
    <ion-router-outlet/>
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet} from "@ionic/vue";
import BaseToolbarMenu from "@/components/base/BaseToolbarMenu.vue";
</script>
