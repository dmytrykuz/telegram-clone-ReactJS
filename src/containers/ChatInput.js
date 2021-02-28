import React from "react";
import { ChatInput as ChatInputBase } from "components";
import { connect } from "react-redux";
import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessages, currentDialogId }) => {
  return (
    <ChatInputBase
      onSendMessage={fetchSendMessages}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
