<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonItem,
  IonInput,
  modalController,
} from '@ionic/vue';
import { ref } from 'vue';

const userAnswer = ref();
const firstNumber = Math.floor(Math.random() * 100);
const secondNumber = Math.floor(Math.random() * 100);
const sum = `What is ${firstNumber} + ${secondNumber} =`;
const sumAnswer = firstNumber + secondNumber;
let wrongAnswer = false;

const cancel = () => modalController.dismiss(null, 'cancel');
const confirm = () => {
  if(userAnswer.value == sumAnswer) {
    modalController.dismiss(userAnswer.value, 'confirm')
  } else {
    console.log("derp");
    wrongAnswer = true;
  }
};

</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button color="medium" @click="cancel">Cancel</ion-button>
      </ion-buttons>
      <ion-title>Are you a grown up?</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="confirm" :strong="true">Yes!!</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-input :label=sum v-model="userAnswer" placeholder="Your answer"></ion-input>
    </ion-item>
    <ion-item v-if="wrongAnswer">
      <ion-text>Wrong answer, please try again</ion-text>
    </ion-item>
  </ion-content>
</template>

<style scoped>

</style>