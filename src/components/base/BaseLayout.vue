<script setup lang="ts">
import {
  IonPage, IonContent, IonFooter,
} from "@ionic/vue";
import BaseToolbar from "@/components/base/BaseToolbar.vue";
</script>

<template>
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