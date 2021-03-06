const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ATTACHMENTS:ADD_FILE":
      return {
        ...state,
        items: [...state.items, payload],
      };

    case "ATTACHMENTS:DELETE_FILE":
      return {
        ...state,
        isAuth: state.items.filter((file) => file._id !== payload),
      };
    default:
      return state;
  }
};
