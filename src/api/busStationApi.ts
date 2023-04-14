import { api, multipartApi } from "@/plugin/axios";

export const renewBusDataApi = (formData: FormData) => {
  return multipartApi.post(
    "http://localhost:8080/api/bus-stations/renewal",
    formData
  );
};

export const getListApi = (condition: { search: string; page?: number }) => {
  return api.get(`http://localhost:8080/api/bus-stations`, {
    params: condition,
  });
};
