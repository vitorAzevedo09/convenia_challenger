<template>
  <div class="toast">
    <div class="toast__sidebar" :class="`toast__${toast.type}`"></div>
    <div class="toast__content">
      <div class="toast__header">
        <h3 class="toast__title">{{ toast.title }}</h3>
        <button class="toast__dismiss" @click="dismissToast">X</button>
      </div>
      <div class="toast__text">
        <p>{{ toast.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const { toast } = defineProps<{
  toast: {
    title: string;
    message: string;
    type: string;
  };
}>();

const emits = defineEmits<{
  (event: 'delete:title', value: string): void
}>()

const dismissToast = () => {
  emits('delete:title', toast.title)
};

onMounted(() => {
  setTimeout(dismissToast, 5000);
});
</script>

<style scoped lang="scss">
@import '../assets/css/variables.scss';

.toast__success,
.toast__info,
.toast__error {
  color: var(--white);
}

.toast__success {
  background-color: green;
}

.toast__info {
  background-color: blue;
}

.toast__error {
  background-color: red;
}

.toast {
  width: 500px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--cream);
  justify-content: center;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: .5rem;
  box-shadow: 0 0 .5rem var(--grey);
}

.toast p {
  font-weight: 100;
}

.toast__sidebar {
  width: .5rem;
  border-radius: 10px 0px 0px 10px;
}

.toast__content,
.toast__header,
.toast__ {
  width: 100%;
  display: flex;
  background: white;
  border-radius: 0px 10px 10px 0px;
}

.toast__content {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  box-sizing: border-box;
}

.toast__header,
.toast__text {
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
}

.toast__header {
  height: 25px;
  margin-bottom: 1rem;
}

.toast__dismiss {
  margin-left: auto;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1rem;
}

.toast__dismiss:hover {
  background: var(--light-grey);
}

.toast__content {
  flex-grow: 1;
}
</style>
