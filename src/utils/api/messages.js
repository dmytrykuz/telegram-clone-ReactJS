import { axios } from "core";

export default {
  getMessagesById: (id) => axios.get(`/messages?dialog=${id}`),
};
