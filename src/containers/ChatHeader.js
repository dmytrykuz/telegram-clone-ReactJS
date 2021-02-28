import React from "react";
import { connect } from "react-redux";
import { ChatHeader as BaseChatHeader } from "components";

const ChatHeader = ({ currentDialogId, user, dialogs }) => {
  if (!dialogs.length || !currentDialogId) {
    return null;
  }

  const currentDialogObj = dialogs.filter(
    (dialog) => dialog._id === currentDialogId
  )[0];

  let partner = {};

  if (currentDialogObj.author._id === user._id) {
    partner = currentDialogObj.partner;
  } else {
    partner = currentDialogObj.author;
  }

  return (
    <BaseChatHeader fullname={partner.fullname} online={partner.isOnline} />
  );
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.items,
  currentDialogId: dialogs.currentDialogId,
  user: user.data,
}))(ChatHeader);
