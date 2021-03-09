import React, { useState, useEffect } from "react";
import { ChatInput as ChatInputBase } from "components";
import { connect } from "react-redux";
import { messagesActions } from "redux/actions";
import { filesApi } from "utils/api";

const ChatInput = ({ fetchSendMessages, currentDialogId }) => {
  const [value, setValue] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

  const sendMessage = () => {
    fetchSendMessages(
      value,
      currentDialogId,
      attachments.map((file) => file.uid)
    );
    setValue("");
    setAttachments([]);
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
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

  const onSelectFiles = async (files) => {
    let uploaded = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);

      uploaded = [
        ...uploaded,
        {
          uid,
          // file,
          name: file.name,
          status: "uploading",
        },
      ];

      setAttachments(uploaded);

      await filesApi.uploadAttachments(file).then(({ data }) => {
        uploaded = uploaded.map((item) => {
          if (item.uid === uid) {
            item = {
              status: "done",
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url,
            };
          }
          return item;
        });
      });
    }

    setAttachments(uploaded);
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
      attachments={attachments}
      onSelectFiles={onSelectFiles}
    />
  );
};

export default connect(({ dialogs }) => dialogs, { ...messagesActions })(
  ChatInput
);
