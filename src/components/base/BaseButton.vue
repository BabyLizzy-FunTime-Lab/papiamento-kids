<script setup lang="ts">
import {computed} from "vue";
import { IonButton} from "@ionic/vue";

defineOptions({
  name: 'BaseButton'
})
defineEmits(['click'])

const props = withDefaults(defineProps<{
  label?: string
  color?: string
  size?: 'small' | 'medium' | 'large'
  expand?: 'block' | 'full' | undefined
}>(), {
  label: 'Button',
  color: 'primary',
  size: 'medium',
  expand: 'block',
});

const sizeClass = computed(() => {
  switch (props.size) {
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
    :color="props.color"
    :expand="expand"
    fill="solid"
    strong
>
  {{props.label}}
</ion-button>
</template>

<style scoped>
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