<template>
  <div class="toasts-wrapper" v-if="toasts.length">
    <ToastComponent v-for="(toast, index) of toasts" :toast="toast" @delete:title="clearToast($event)" :key="index" />
  </div>
</template>

<script setup lang="ts">
import ToastComponent from './Toast.vue';
import type { Toast } from '../types/types.d.ts'
import { useToastStore } from '@/stores/toasts';

const { clearToast } = useToastStore()

interface Props {
  toasts: Toast[]
}

const { toasts } = defineProps<Props>()

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.toasts-wrapper {
  width: $toasts-wrapper-width;
  min-height: $toasts-wrapper-height;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
}
</style>




