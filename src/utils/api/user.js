import { axios } from "core";

export default {
  login: (userData) => axios.post("/user/login", userData),
  registration: (userData) => axios.post("/user/registration", userData),
  verifyHash: (hash) => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get("/user/me"),
};
