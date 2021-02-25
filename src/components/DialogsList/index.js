import React from "react";
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import "./DialogsList.sass";


const DialogsList = ({
  items,
  userId,
  onSearch,
  inputValue,
  currentDialogId,
  onSelectDialog,
}) => {
  return (
    <div className="dialogs-list">
      <div className="dialogs-list__sidebar-search">
        <Input.Search
          placeholder="Пошук"
          onChange={(e) => onSearch(e.target.value)}
          value={inputValue}
          // style={{ width: 100%, margin: "0 10px" }}
        />
      </div>
      {items.length ? (
        orderBy(items, ["created_at"], ["desc"]).map((item) => (
          <DialogItem
            onSelect={onSelectDialog}
            isMe={item.author._id === userId}
            currentDialogId={currentDialogId}
            {...item}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Повідомлень не знайдено"
        />
      )}
    </div>
  );
};

export default DialogsList;
