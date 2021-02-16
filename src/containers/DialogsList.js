import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "redux/actions";
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

  const onChangeInput = (value) => {
    setFiltredItems(
      items.filter((dialog) => 
      dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 || 
      dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      )
    );
    setValue(value);
  };

  // const onSelectDialog = () => {};

  // useEffect(() => {
  //   if (!items.length) {
  //     fetchAllDialogsId();
  //   } else {
  //     setFiltredItems(items);
  //   }
  // }, [items]);

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
