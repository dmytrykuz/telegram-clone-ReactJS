import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from "date-fns/locale";
import classNames from "classnames";
import readedSvg from "assets/svg/readed.svg";
import notReadedSvg from "assets/svg/notreaded.svg";

import "./Message.sass";

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  isTyping,
  attachments,
}) => {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
      })}
    >
      <div className="message__content">
        <div className="message__readed-status">
          {isMe && isReaded ? (
            <img
              className="message__icon-readed"
              src={readedSvg}
              alt="Readed icon"
            />
          ) : (
            <img
              className="message__icon-readed message__icon-readed--no"
              src={notReadedSvg}
              alt="Not Readed icon"
            />
          )}
        </div>
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
          {date && (
            <span className="message__date">
              {formatDistanceToNow(new Date(date), {
                addSuffix: true,
                locale: ru,
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
