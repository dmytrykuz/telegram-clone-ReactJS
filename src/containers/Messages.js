import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { messagesActions } from "redux/actions";
import socket from "core/socket";
import { Messages as BaseMessages } from "components";

const Messages = ({
  items,
  currentDialogId,
  fetchMessages,
  addMessage,
  user,
  isLoading,
  deleteMessageById,
}) => {
  const messagesRef = useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
  };

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:ADD_MESSAGE", onNewMessage);

    return () => {
      socket.removeListener("SERVER:ADD_MESSAGE", onNewMessage);
    };
  }, [currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 9999999);
  }, [items]);
  
  return (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading && !user}
      onDeleteMessage={deleteMessageById}
    />
  );
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Messages);
