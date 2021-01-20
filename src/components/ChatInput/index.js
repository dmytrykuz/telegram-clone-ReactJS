import React, { useState } from "react";
import {
  SmileOutlined,
  LinkOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart'

import "./ChatInput.sass";


const ChatInput = () => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setEmojiPicker] = useState("");

  const toggleEmojiPicker = () => {
    setEmojiPicker(!emojiPickerVisible);
  };

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible &&
        <div className="chat-input__emoji-picker">
          <Picker set='apple'/>
        </div>}
        <Button onClick={toggleEmojiPicker} type="link" icon={<SmileOutlined/>}/>
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
        <UploadField
          onFiles={files => console.log(files)}
          containerProps={{
            className: 'chat-input__actions-upload-btn'
          }}
          uploadProps={{
            accept: '.jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt,.rtf',
            multiple: "multiple",
          }}>
          <Button type="link" icon={<LinkOutlined/>}/>
        </UploadField>
        {value ? (
          <Button type="link" icon={<SendOutlined/>}/>
        ) : (
          <Button type="link" icon={<AudioOutlined/>}/>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
