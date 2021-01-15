import { dialogsApi } from "utils/api";

const Actions = {
  setDialogs: (items) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  fetchAllDialogs: () => (dispatch) => {
    dialogsApi.getAllDialogs().then(({ data }) => {
      dispatch(Actions.setDialogs(data));
    });
  },
};

export default Actions;
