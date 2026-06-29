<script setup lang="ts">
import {computed} from "vue";
import { IonButton} from "@ionic/vue";

defineOptions({
  name: 'BaseButton'
})
defineEmits(['click'])

const props = withDefaults(defineProps<{
  btn_label?: string
  btn_size?: 'small' | 'medium' | 'large'
  btn_expand?: 'block' | 'full' | undefined
  btn_color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}>(), {
  btn_label: 'Button',
  btn_size: 'medium',
  btn_expand: 'block',
  btn_color: 'primary',
});

const sizeClass = computed(() => {
  switch (props.btn_size) {
    case 'small':
      return 'btn-small';
    case 'medium':
      return 'btn-medium';
    case 'large':
      return 'btn-large';
    default:
      return 'btn-default';
  }
})
</script>

<template>
<ion-button
    @click="$emit('click')"
    type="button"
    class="btn"
    :class="sizeClass"
    :expand="btn_expand"
    :color="btn_color"
    fill="solid"
    strong
>
  {{props.btn_label}}
</ion-button>
</template>

<style scoped>
.btn {
  --background: var(--ion-color-primary);
  --color: white;
  --border-radius: var(--ion-standard-border-radius);
}
.btn-small {
  font-size: 12px;
  height: 32px;
}

.btn-medium {
  font-size: 16px;
  height: 44px;
}

.btn-large {
  font-size: 20px;
  height: 60px;
}
</style>