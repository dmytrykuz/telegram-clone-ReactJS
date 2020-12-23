import React from "react";
import classNames from "classnames";
import { Time, ReadedStatus, Avatar } from "../";
import { format, isToday, isThisYear } from "date-fns";

import "./DialogItem.sass";

const getMessageTime = (created_at) => {
  if (isToday(new Date(created_at))) {
    return format(new Date(created_at), "hh:mm");
  } else if (isThisYear(new Date(created_at))) {
    return format(new Date(created_at), "dd LLL");
  } else {
    return format(new Date(created_at), "dd.MM.uuuu");
  }
};

const DialogItem = ({ user, text, isReaded, unreaded, created_at, isMe }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        " dialogs__item--online": user.isOnline,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>
            {getMessageTime(created_at)}
            {/* <Time date={created_at} /> */}
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isMe && <ReadedStatus isMe={true} isReaded={isReaded} />}
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
