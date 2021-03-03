import { axios } from "core";

export default {
  getAllDialogs: () => axios.get("/dialogs"),
  create: ({ partner, text }) => axios.post("/dialogs", { partner, text }),
};
