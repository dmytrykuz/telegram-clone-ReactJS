import { axios } from "core";

export default {
  getMessagesById: (id) => axios.get(`/messages?dialog=${id}`),
  send: (text, dialogId) =>
    axios.post("/messages", {
      text: text,
      dialog_id: dialogId,
    }),
};
