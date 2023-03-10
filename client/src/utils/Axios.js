import axios from "axios";
import { host } from "./APIRoutes"

const accessToken = localStorage.getItem("accessToken");

export const authAxios = axios.create({
  baseURL: host,
  headers: {
    'authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
});

export const authAxiosFile = axios.create({
  baseURL: host,
  headers: {
    'authorization': `Bearer ${accessToken}`,
    "content-type": "multipart/form-data",
  }
});

export const Axios = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json'
  }
});