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
        <th scope="col" class="text-center">법정동 코드</th>
        <th scope="col" class="text-center">위도</th>
        <th scope="col" class="text-center">경도</th>
      </template>
      <template #tbody>
        <tr v-for="bus in busList" :key="bus.stationId">
          <td class="text-center">{{ bus.stationId }}</td>
          <td class="text-center">{{ bus.name }}</td>
          <td class="text-center">{{ bus.address }}</td>
          <td class="text-center">{{ bus.roadAddress }}</td>
          <td class="text-center">{{ bus.bcode }}</td>
          <td class="text-center">{{ bus.lng }}</td>
          <td class="text-center">{{ bus.lat }}</td>
        </tr>
      </template>
    </ListComp>
    <PaginationComp />
  </div>
  <ModalComp :id="modal.id" :title="modal.title" :approve="modal.approve">
    <template #body>
      <div class="input-group mb-3">
        <input type="file" class="form-control" id="busFile" />
      </div>
    </template>
  </ModalComp>
</template>

<script lang="ts" setup>
import ListComp from "@/components/common/ListComp.vue";
import NavbarComp from "@/components/common/NavbarComp.vue";
import PaginationComp from "@/components/common/PaginationComp.vue";
import ModalComp from "@/components/common/ModalComp.vue";
import { reactive, ref } from "vue";
import ModalToggleButtonComp from "@/components/common/ModalToggleButtonComp.vue";

const modal = reactive({
  id: "busModal",
  title: "버스 데이터 갱신",
  approve: "갱신",
  toggle: "데이터 갱신",
});

const busList = ref([
  {
    stationId: "TSB254000096",
    name: "양지연립",
    address: "서울시 지번 주소",
    roadAddress: "서울시 도로명 주소",
    lat: "129.049088",
    lng: "37.094144",
    bcode: "1100000000",
  },
  {
    stationId: "TSB254000096",
    name: "양지연립",
    address: "서울시 지번 주소",
    roadAddress: "서울시 도로명 주소",
    lat: "129.049088",
    lng: "37.094144",
    bcode: "1100000000",
  },
  {
    stationId: "TSB254000096",
    name: "양지연립",
    address: "서울시 지번 주소",
    roadAddress: "서울시 도로명 주소",
    lat: "129.049088",
    lng: "37.094144",
    bcode: "1100000000",
  },
]);
</script>

<style scoped></style>
