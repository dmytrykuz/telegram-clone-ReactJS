import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { dialogsActions } from "redux/actions";
import socket from "core/socket";
import { DialogsList as BaseDialogs } from "components";

const DialogsList = ({
  fetchAllDialogsId,
  currentDialogId,
  setCurrentDialogId,
  items,
  userId,
}) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltredItems] = useState(Array.from(items));

  const onChangeInput = (value = "") => {
    setFiltredItems(
      items.filter(
        (dialog) =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0
      )
    );
    setValue(value);
  };

  window.fetchAllDialogsId = fetchAllDialogsId;

  useEffect(() => {
    if (items.length) {
      onChangeInput();
    }
  }, [items]);

  useEffect(() => {
    fetchAllDialogsId();

    socket.on("SERVER:CREATE_DIALOG", fetchAllDialogsId);
    return () => {
      socket.removeListener("SERVER:CREATE_DIALOG", fetchAllDialogsId);
    };
  }, []);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(DialogsList);
