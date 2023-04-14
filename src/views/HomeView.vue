<template>
  <NavbarComp />
  <div class="container-xxl mt-5">
    <div class="d-flex justify-content-end mb-2">
      <ModalToggleButtonComp :id="modal.id" :text="modal.toggle" />
    </div>
    <ListComp>
      <template #thead>
        <th scope="col" class="text-center">정류장번호</th>
        <th scope="col" class="text-center">정류장명</th>
        <th scope="col" class="text-center">지번 주소</th>
        <th scope="col" class="text-center">도로명 주소</th>
        <th scope="col" class="text-center">위도</th>
        <th scope="col" class="text-center">경도</th>
      </template>
      <template #tbody>
        <tr v-for="station in busStations" :key="station.stationId">
          <td class="text-center">{{ station.stationId }}</td>
          <td class="text-center">{{ station.name }}</td>
          <td class="text-center">{{ station.address }}</td>
          <td class="text-center">{{ station.roadAddress }}</td>
          <td class="text-center">{{ station.lng }}</td>
          <td class="text-center">{{ station.lat }}</td>
        </tr>
      </template>
    </ListComp>
    <PaginationComp v-show="totalPage" :store="busStationStore" />
  </div>
  <ModalComp :id="modal.id" :title="modal.title">
    <template #body>
      <form
        id="busModalForm"
        @submit.prevent="submitBusDataFile"
        enctype="multipart/form-data"
      >
        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            id="busDataFile"
            @change="onChangeFile"
          />
          <button type="submit" class="btn btn-primary">갱신</button>
        </div>
      </form>
    </template>
  </ModalComp>
</template>

<script lang="ts" setup>
import ListComp from "@/components/common/ListComp.vue";
import NavbarComp from "@/components/common/NavbarComp.vue";
import PaginationComp from "@/components/common/PaginationComp.vue";
import ModalComp from "@/components/common/ModalComp.vue";
import { reactive, Ref, ref } from "vue";
import ModalToggleButtonComp from "@/components/common/ModalToggleButtonComp.vue";
import { renewBusDataApi } from "@/api/busStationApi";
import { useBusStationStore } from "@/store/busStationStore";
import { storeToRefs } from "pinia";

const busStationStore = useBusStationStore();

const modal = reactive({
  id: "busModal",
  title: "버스 데이터 갱신",
  toggle: "데이터 갱신",
});
const { busStations, totalPage } = storeToRefs(busStationStore);

const busFormData: Ref<FormData> = ref(new FormData());

const onChangeFile = (event: InputEvent) => {
  const eventTarget = event.target as HTMLInputElement;
  const files = eventTarget.files as FileList;
  const busFile = files[0];

  if (busFile) {
    busFormData.value.delete("busDataFile");
    busFormData.value.append("busDataFile", busFile);
  }
};

const submitBusDataFile = async () => {
  const res = await renewBusDataApi(busFormData.value);
  res?.status === 200 && alert("갱신 완료!");
};
</script>

<style scoped></style>
