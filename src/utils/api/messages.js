import { axios } from "core";

export default {
  getMessagesById: (id) => axios.get(`/messages?dialog=${id}`),
  send: (text, dialogId, attachments) =>
    axios.post("/messages", {
      text: text,
      dialog_id: dialogId,
      attachments
    }),
  deleteById: (id) => axios.delete("/messages?id=" + id),
};
