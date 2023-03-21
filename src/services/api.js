import axios from "axios";

import {HttpCode} from "../const";

const BASE_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    if (response.status === HttpCode.PAGE_NOT_FOUND) {
      throw HttpCode.PAGE_NOT_FOUND;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
