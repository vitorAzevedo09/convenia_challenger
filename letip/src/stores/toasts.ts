import { defineStore } from "pinia";
import { reactive } from "vue";
import { type Toast } from '@/types/types.d'


export const useToastStore = defineStore('toasts', () => {

  const toasts = reactive<Toast[]>([])

  const addToast = (toast: Toast) => {
    toasts.push(toast)
  }

  const clearToast = (title: string) => {
    const index = toasts.findIndex((toast) => toast.title === title);
    toasts.splice(index, 1);
  }

  return {
    toasts,
    addToast,
    clearToast
  }
})
