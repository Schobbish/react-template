import axios from "axios";
import { config } from "../config";

export const isMswEnabled =
  !config.useExternalApi &&
  (process.env.NODE_ENV === "development" || config.alwaysUseMsw);

/** Axios instance with baseURL set up correctly */
export const apiAxios = axios.create({
  baseURL: isMswEnabled ? process.env.PUBLIC_URL : config.externalApiOrigin
});
