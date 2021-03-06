import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import { Message } from "../";
import "./Messages.sass";

const Messages = ({ onDeleteMessage, blockRef, isLoading, items, user }) => {
  return (
    <div 
      ref={blockRef}
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin size="large" tip="Завантаження..." />
      ) : items && !isLoading ? (
        items.length > 0 ? (
          <div>
            {items.map((item) => (
              <Message
                key={item._id}
                {...item}
                isMe={user._id === item.user._id}
                onDeleteMessage={onDeleteMessage.bind(this, item._id)}
              />
            ))}
          </div>
        ) : (
          <Empty description="Немає повідомлень" />
        )
      ) : (
        <Empty description="Відкрийте діалог" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
