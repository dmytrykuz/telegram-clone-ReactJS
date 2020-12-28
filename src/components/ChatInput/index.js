import React, { useState } from "react";
import {
  SmileOutlined,
  LinkOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";

import "./ChatInput.sass";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button type="link" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        size="large"
        placeholder="Написати повідомлення..."
        allowClear
        onSearch={(value) => console.log(value)}
        // style={{ width: 100%, margin: "0 10px" }}
      />
      <div className="chat-input__actions">
        <Button type="link" icon={<LinkOutlined />} />
        {value ? (
          <Button type="link" icon={<SendOutlined />} />
        ) : (
          <Button type="link" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
