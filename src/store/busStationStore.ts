import { defineStore } from "pinia";
import { getListApi } from "@/api/busStationApi";

class BusStation {
  stationId: string | undefined;
  name: string | undefined;
  address: string | undefined;
  roadAddress: string | undefined;
  lng: string | undefined;
  lat: string | undefined;
}

export const useBusStationStore = defineStore("busStation", {
  state: () => ({
    search: "" as string,
    busStations: [] as BusStation[],
    page: 1 as number,
    totalPage: 0 as number,
    pagination: [] as number[],
  }),
  actions: {
    async changePage(page: number) {
      this.page = page;
      await this.getList();
    },
    async getList() {
      const res = await getListApi({ search: this.search, page: this.page });

      const { busStations, page, totalPage } = res.data as {
        busStations: BusStation[];
        page: number;
        totalPage: number;
      };

      this.busStations = busStations;
      this.page = page;
      this.totalPage = totalPage;

      const start = Math.floor((page - 1) / 10) * 10 + 1;
      const end = Math.min(start + 9, totalPage);
      const pagination = Array(end - start + 1);
      for (let i = 0; i < pagination.length; i++) {
        pagination[i] = i + start;
      }
      this.pagination = pagination;
    },
  },
  getters: {
    getPagination: (state) => {
      const start = Math.floor((state.page - 1) / 10) * 10 + 1;
      const end = Math.min(start + 9, state.totalPage);

      const pagination = Array(end - start + 1);
      pagination.forEach((page, index) => {
        pagination[index] = index + start;
        console.log(index + start);
      });
      return pagination;
    },
  },
});
