<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-container">
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button @click="closeModal">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: 'OK'
  }
})

const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: var(--color-background);
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border);
}

.modal-body {
  padding: 20px;
  color: var(--color-text);
}

.modal-footer {
  padding: 20px;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
}
</style>
