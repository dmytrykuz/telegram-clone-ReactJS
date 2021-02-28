import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import "./ChatHeader.sass";

const ChatHeader = ({ fullname, online }) => {
  return (
    <div className="chat__dialog-header">
      <div></div>
      <div className="chat__dialog-header-center">
        <b className="chat__dialog-header-username">{fullname}</b>
        <div className="chat__dialog-header-status">
          <span className={classNames("status", { "status--online": online })}>
            {online ? "online" : "offline"}
          </span>
        </div>
      </div>
      <Button
        type="link"
        icon={<EllipsisOutlined style={{ fontSize: "22px" }} />}
      />
    </div>
  );
};

ChatHeader.propTypes = {
  online: PropTypes.bool,
};

export default ChatHeader;
