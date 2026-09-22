import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://biggestcabbage-us.backendless.app/api",
})