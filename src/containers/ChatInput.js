import React, { useState, useEffect } from "react";
import { ChatInput as ChatInputBase } from "components";
import { connect } from "react-redux";
import { messagesActions } from "redux/actions";
import { useOutside } from "utils/helpers";

const ChatInput = ({ fetchSendMessages, onSendMessage, currentDialogId }) => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

  const sendMessage = () => {
    fetchSendMessages({
      text: value,
      dialogId: currentDialogId,
    });
    setValue("");
  };


  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      fetchSendMessages(value, currentDialogId);
      sendMessage(value, currentDialogId);
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const setEmojiToInput = (obj) => {
    const { native } = obj;
    setValue(value + " " + native);
  };

  const handleOutsideClick = (element, e) => {
    if (element && !element.contains(e.target)) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    const element = document.querySelector(".chat-input__smile-btn");

    document.addEventListener("click", handleOutsideClick.bind(this, element));

    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick.bind(this, element)
      );
    };
  }, []);

  if (!currentDialogId) {
    return null;
  }

  return (
    <ChatInputBase
      value={value}
      setValue={setValue}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      setEmojiToInput={setEmojiToInput}
      handleSendMessage={handleSendMessage}
      sendMessage={sendMessage}
    />
  );
};

export default connect(({ dialogs }) => dialogs, { ...messagesActions })(
  ChatInput
);
