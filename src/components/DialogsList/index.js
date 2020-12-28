import React from "react";
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import "./DialogsList.sass";

const DialogsList = ({ items, userId, onSearch, inputValue }) => {
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
            key={item._id}
            isMe={item.user._id === userId}
            {...item}
          />
        ))
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Повідомлень не знайдено"/>
      )}
    </div>
  );
};

export default DialogsList;
