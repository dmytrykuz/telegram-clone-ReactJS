import { messagesApi } from "utils/api";

const Actions = {
  setMessages: (items) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items,
  }),

  addMessage: (message) => (dispatch, getState) => {
    const { dialogs } = getState();
    const { currentDialogId } = dialogs;

    if (currentDialogId === message.dialog._id) {
      dispatch({
        type: "MESSAGES:ADD_MESSAGE",
        payload: message,
      });
    }
  },

  fetchSendMessages: (text, dialogId, attachments) => (dispatch) => {
    messagesApi.send(text, dialogId, attachments);
  },

  setIsLoading: (bool) => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: bool,
  }),

  deleteMessageById: (id) => (dispatch) => {
    if (window.confirm("Ви хочете видалити це повідомлення?")) {
      messagesApi
        .deleteById(id)
        .then(() => {
          dispatch({
            type: "MESSAGES:DELETE_MESSAGE",
            payload: id,
          });
        })
        .catch(() => {
          dispatch(Actions.setIsLoading(false));
        });
    }
  },
  
  fetchMessages: (dialogId) => (dispatch) => {
    dispatch(Actions.setIsLoading(true));
    messagesApi
      .getMessagesById(dialogId)
      .then(({ data }) => {
        dispatch(Actions.setMessages(data));
      })
      .catch(() => {
        dispatch(Actions.setIsLoading(false));
      });
  },
};

export default Actions;
