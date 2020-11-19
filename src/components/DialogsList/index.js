import React from "react";
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";

import "./DialogsList.sass";

const DialogsList = ({ items, userId }) => {
  return (
    <div className="dialogs-list">
      {orderBy(items, ["created_at"], ["desc"]).map(item => (
        <DialogItem
          key={item._id}
          isMe={item.user._id === userId}
          {...item}
        />
      ))}
    </div>
  );
};

export default DialogsList;
