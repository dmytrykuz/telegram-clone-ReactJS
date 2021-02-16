import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";


const Messages = ({items, currentDialogId, fetchMessages, isLoading}) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if(currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId])

  useEffect(() => {
    messagesRef.current.scrollTo(0, 1000);
  }, [items]);

  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading}/>
  )
};

export default connect(({dialogs, messages}) => ({
  currentDialogId: dialogs.currentDialogId,
  items: messages.items,
  isLoading: messages.isLoading,
}), messagesActions)(Messages);