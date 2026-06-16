<script setup lang="ts">
import BaseLayout from "@/components/base/BaseLayout.vue";

import {useLoginStore} from "@/stores/loginStore";
import {computed} from "vue";
import {
  IonBackButton, IonButtons, IonHeader, IonTitle,
  IonToolbar, IonList, IonInput, IonAvatar, IonItem,
} from "@ionic/vue";
import BaseButton from "@/components/base/BaseButton.vue";

const loginStore = useLoginStore();
const userProfile = computed(() => loginStore.getActiveProfile);

</script>

<template>
<base-layout>
  <div class="user-profile--container">
    <ion-header class="user-profile__header">
      <ion-toolbar class="user-profile__toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>
          User Profile
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-list>
      <ion-list>
        <ion-avatar class="user-profile__avatar">
          <img
            :src="userProfile?.avatar"
            alt="user avatar"
          />
        </ion-avatar>
      </ion-list>
      <ion-item class="user-profile__item" lines="none">
        <ion-input label="ID: " :value="userProfile?.id" label-placement="floating" />
      </ion-item>
      <ion-item class="user-profile__item" lines="none">
        <ion-input label="Name:" :value="userProfile?.name" label-placement="floating" />
      </ion-item>
      <base-button  class="user-profile__btn" btn_label="Update"/>
    </ion-list>

  </div>

</base-layout>
</template>

<style scoped>
.user-profile--container {
  padding: 2em;
}
.user-profile__avatar {
  height: 15em;
  width: 15em;
  margin: 1em auto 1em;
  border: solid .2em var(--ion-color-tertiary);
  --border-radius: 3em;
}
.user-profile__item {
  max-width: 50%;
  margin: auto;
  overflow: scroll;
  font-size: 1.2em;
}
.user-profile__btn {
  max-width: 80%;
  margin: 1em auto 2em;
}
@media screen and (min-width: 375px) {
  .user-profile__item {
    max-width: 90%;
    margin: auto;
    overflow: scroll;
  }
}
@media screen and (min-width: 768px) {
  .user-profile__item {
    max-width: 65%;
    margin: auto;
  }
  .user-profile__btn {
    max-width: 60%;
  }
}

@media screen and (orientation: landscape) and (min-width: 768px) {
  .user-profile__btn {
    max-width: 60%;
  }
}

@media screen and (orientation: portrait ) and (min-width: 992px) {
  .user-profile--container {
    max-width: 80%;
    margin: auto;
  }
  .user-profile__item {
    max-width: 50%;
    margin: auto;
  }
  .user-profile__btn {
    max-width: 60%;
  }
}
@media screen and (orientation: landscape) and (min-width: 992px) {
  .user-profile--container {
    max-width: 60%;
    margin: auto;
  }
}
@media only screen and (min-width: 1200px) {
  .user-profile--container {
    max-width: 50%;
    margin: auto;
  }
  .user-profile__item {
    width: 25em;
    margin: auto;
    overflow: auto;
  }
  .user-profile__btn {
    max-width: 40%;
  }
}
</style>