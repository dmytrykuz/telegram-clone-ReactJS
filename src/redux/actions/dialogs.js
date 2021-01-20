import {dialogsApi} from "utils/api";

const Actions = {
    setDialogs: (items) => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items,
    }),
    setCurrentDialogId: (id) => ({
        type: "DIALOGS:SET_CURRENT_DIALOG_ID",
        payload: id,
    }),
    fetchAllDialogsId: () => (dispatch) => {
        dialogsApi.getAllDialogs().then(({data}) => {
            dispatch(Actions.setDialogs(data));
        });
    },
};

export default Actions;
