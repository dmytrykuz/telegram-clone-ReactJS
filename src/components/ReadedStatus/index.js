import React from "react";
import PropTypes from "prop-types";
import readedSvg from "assets/svg/readed.svg";
import notReadedSvg from "assets/svg/notreaded.svg";

const ReadedStatus = ({ isMe, isReaded }) => {
  return (
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
  );
};

ReadedStatus.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default ReadedStatus;
