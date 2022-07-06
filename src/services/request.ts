import axios from "axios";

import ms from 'ms'
import merge from "lodash/merge";

import { getAccessToken } from "../storeon/session";

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: ms('5s'),
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use((config) => {
  const token = getAccessToken();

  return merge({}, config, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
});

export default request;
