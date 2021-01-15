import { axios } from "core";

export default {
  getAllDialogs: () => axios.get("/dialogs"),
};
