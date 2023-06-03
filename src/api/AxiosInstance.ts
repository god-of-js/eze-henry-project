import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-one-api.dev/v2",
  timeout: 240000,
  headers: {
    Authorization: "Bearer Z_TJOFIcXSQ5BBFJWQ67",
  },
});

export default instance;
