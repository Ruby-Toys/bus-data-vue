<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li
        v-show="store.pagination[0] !== 1"
        class="page-item"
        @click="store.changePage(store.pagination[0] - 1)"
      >
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in store.pagination"
        class="page-item"
        :key="page"
        @click="store.changePage(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      <li
        v-show="store.pagination[store.pagination.length - 1] < store.totalPage"
        class="page-item"
        @click="
          store.changePage(store.pagination[store.pagination.length - 1] + 1)
        "
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({ store: { type: Object, required: false } });
</script>

<style scoped></style>
