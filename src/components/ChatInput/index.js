import React from "react";
import {
  SmileOutlined,
  LinkOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import "./ChatInput.sass";

const ChatInput = ({
  value,
  handleSendMessage,
  toggleEmojiPicker,
  setEmojiToInput,
  emojiPickerVisible,
  setValue,
  sendMessage,
}) => {
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <div className="chat-input__emoji-picker">
          {emojiPickerVisible && (
            <Picker
              ref={(ref) => console.log(ref)}
              onSelect={(emojiTag) => setEmojiToInput(emojiTag)}
              set="apple"
            />
          )}
        </div>
        <Button
          onClick={toggleEmojiPicker}
          type="link"
          icon={<SmileOutlined />}
        />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        size="large"
        placeholder="Написати повідомлення..."
        value={value}
        allowClear={true}
        // autoSize={{minRows: 1, maxRows: 6}}
        // onSearch={(value) => console.log(value)}
        // style={{ width: 100%, margin: "0 10px" }}
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: "chat-input__actions-upload-btn",
          }}
          uploadProps={{
            accept: ".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt,.rtf",
            multiple: "multiple",
          }}
        >
          <Button type="link" icon={<LinkOutlined />} />
        </UploadField>
        {value ? (
          <Button
            onClick={sendMessage}
            type="link"
            icon={<SendOutlined />}
          />
        ) : (
          <Button type="link" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
