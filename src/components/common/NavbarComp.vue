<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Bus Station Information</a>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
        />
        <button
          class="btn btn-outline-success"
          type="button"
          @click="callGetListApi"
        >
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useBusStationStore } from "@/store/busStationStore";
import { storeToRefs } from "pinia";

const busStationStore = useBusStationStore();
const { search } = storeToRefs(busStationStore);

const callGetListApi = () => {
  busStationStore.getList();
};
</script>

<style scoped></style>
