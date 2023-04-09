import axios from "axios";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const multipartApi = axios.create({
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
