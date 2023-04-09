import { multipartApi } from "@/plugin/axios";

export const renewBusDataApi = (formData: FormData) => {
  return multipartApi.post(
    "http://localhost:8080/api/bus-stations/renewal",
    formData
  );
};
