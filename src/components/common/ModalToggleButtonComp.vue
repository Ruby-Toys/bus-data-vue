<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    :data-bs-target="`#${id}`"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
});
</script>

<style scoped></style>
