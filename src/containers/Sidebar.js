import React, { useState } from "react";
import { connect } from "react-redux";
import { Sidebar as BaseSidebar } from "components";
import { userApi, dialogsApi } from "utils/api";

const Sidebar = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messageText, setMessageText] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(false);

  const onShow = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSearch = (value) => {
    setIsLoading(true);
    userApi
      .findUsers(value)
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onAddDialog = () => {
    dialogsApi
      .create({ partner: selectedUserId, text: messageText })
      .then(onClose)
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleChangeInput = (value) => {
    setInputValue(value);
  };

  const onChangeMessageArea = (e) => {
    setMessageText(e.target.value);
  };

  const onSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <BaseSidebar
      user={user}
      users={users}
      visible={visible}
      inputValue={inputValue}
      messageText={messageText}
      isLoading={isLoading}
      onShow={onShow}
      onClose={onClose}
      onSearch={onSearch}
      onAddDialog={onAddDialog}
      handleChangeInput={handleChangeInput}
      onChangeMessageArea={onChangeMessageArea}
      onSelectUser={onSelectUser}
      selectedUserId={selectedUserId}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(Sidebar);
