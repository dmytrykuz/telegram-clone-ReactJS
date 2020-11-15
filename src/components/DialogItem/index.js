import React from "react";
import classNames from "classnames";
import { Time, ReadedStatus } from "../";

import "./DialogItem.sass";

const getAvatar = (avatar, fullname) => {
  if (avatar) {
    return <img src={avatar} alt={`${fullname} avatar`} />;
  } else {
    //make avatar (avatar generator)
  }
};

const DialogItem = ({ user, message, isOnline, unreaded }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        " dialogs__item--online": isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
        {getAvatar(user.avatar, user.fullname)}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>
            {/* <Time date={message.created_at} /> */}
            13:03
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{message.text}</p>
          <ReadedStatus isMe={message.isMe} isReaded={message.isReaded} />
          {unreaded > 0 && (
            <div
              className={classNames("dialogs__item-info-bottom-count", {
                "dialogs__item-info-bottom-count--medium": unreaded > 9,
                "dialogs__item-info-bottom-count--large": unreaded > 99,
                "dialogs__item-info-bottom-count--max": unreaded > 999,
              })}
            >
              {unreaded > 999 ? "+999" : unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
