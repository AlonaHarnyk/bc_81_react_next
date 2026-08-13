import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const api = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});
