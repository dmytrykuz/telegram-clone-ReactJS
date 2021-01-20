import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";

// class Messages extends React.Component {
//     componentDidUpdate(prevProps) {
//         const { fetchMessages, currentDialogId } = this.props;
//         if(prevProps.currentDialogId !== this.props.currentDialogId) {
//             fetchMessages(currentDialogId);
//         }
//     }
//
//     render() {
//         const {items} = this.props;
//         return <BaseMessages items={items}/>
//     }
// }

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