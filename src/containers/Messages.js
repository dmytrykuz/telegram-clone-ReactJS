import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { messagesActions } from "redux/actions";
import socket from "core/socket";
import { Messages as BaseMessages } from "components";
import { Empty } from "antd";

const Messages = ({
  items,
  addMessage,
  fetchMessages,
  deleteMessageById,
  currentDialogId,
  user,
  isLoading,
  lastMessage
}) => {
  const messagesRef = useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
  };

  useEffect(() => {
    if (currentDialogId) {
      console.log("1111");
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:ADD_MESSAGE", onNewMessage);

    return () => {
      socket.removeListener("SERVER:ADD_MESSAGE", onNewMessage);
    };
  }, [currentDialogId]);

  useEffect(() => {
    if(currentDialogId) {
      messagesRef.current.scrollTo(0, 9999999);
    }
  }, [items]);

  if (!currentDialogId) {
    return <Empty description="Відкрийте діалог" />;
  }


  return (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading && !user}
      onDeleteMessage={deleteMessageById}
      currentDialogId={currentDialogId}
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
