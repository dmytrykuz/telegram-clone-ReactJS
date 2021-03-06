import React from "react";
import classNames from "classnames";
import { ReadedStatus, Avatar } from "../";
import { format, isToday, isThisYear } from "date-fns";
import { Link } from "react-router-dom";

import "./DialogItem.sass";

const getMessageTime = (createdAt) => {
  if (isToday(new Date(createdAt))) {
    return format(new Date(createdAt), "HH:mm");
  } else if (isThisYear(new Date(createdAt))) {
    return format(new Date(createdAt), "dd LLL");
  } else {
    return format(new Date(createdAt), "dd.MM.uuuu");
  }
};

const DialogItem = ({
  _id,
  read,
  isMe,
  currentDialogId,
  lastMessage,
  partner,
}) => {
  console.log("last message", lastMessage);
  console.log("partner ", partner);
  return (
    <Link to={`/dialog/${_id}`}>
      <div
        className={classNames("dialogs__item", {
          "dialogs__item--online": partner.isOnline,
          "dialogs__item--selected": currentDialogId === _id,
        })}
      >
        <div className="dialogs__item-avatar">
          <Avatar user={partner} />
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <b>{partner.fullname}</b>
            <span>{getMessageTime(lastMessage.createdAt)}</span>
          </div>
          <div className="dialogs__item-info-bottom">
            <p>{lastMessage.text}</p>
            {isMe && <ReadedStatus isMe={true} isReaded={lastMessage.readed} />}
            {lastMessage.read > 0 && (
              <div
                className={classNames("dialogs__item-info-bottom-count", {
                  "dialogs__item-info-bottom-count--medium": read > 9,
                  "dialogs__item-info-bottom-count--large": read > 99,
                  "dialogs__item-info-bottom-count--max": read > 999,
                })}
              >
                {read > 999 ? "+999" : read}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DialogItem;
