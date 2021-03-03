import React from "react";
import { DialogsList } from "containers";
import { TeamOutlined, FormOutlined } from "@ant-design/icons";
import { Button, Modal, Select, Input, Form } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const Sidebar = ({
  user,
  visible,
  inputValue,
  messageText,
  selectedUserId,
  isLoading,
  users,
  onShow,
  onClose,
  onSearch,
  handleChangeInput,
  onSelectUser,
  onChangeMessageArea,
  onAddDialog,
}) => {
  const options = users.map((user) => (
    <Option key={user._id}>{user.fullname}</Option>
  ));

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <TeamOutlined />
          <span>Список діалогів</span>
        </div>
        <Button onClick={onShow} type="link" icon={<FormOutlined />} />
      </div>
      <div className="chat__sidebar-dialogs">
        <DialogsList userId={user && user._id} />
      </div>
      <Modal
        title="Контакти"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Закрити
          </Button>,
          <Button
            disabled={!messageText}
            onClick={onAddDialog}
            loading={isLoading}
            key="submit"
            type="primary"
          >
            Почати діалог
          </Button>,
        ]}
      >
        <Form className="add-dialogs-form">
          <Form.Item label="Введіть ім'я або E-mail користувача зі списку контактів">
            <Select
              // placeholder={"Виберіть з ким почати спілкування"}
              showSearch
              value={inputValue}
              onSearch={onSearch}
              onChange={handleChangeInput}
              onSelect={onSelectUser}
              notFoundContent={null}
              defaultActiveFirstOption={false}
              showArrow={true}
              filterOption={false}
              style={{ width: "100%" }}
            >
              {options}
            </Select>
          </Form.Item>
          {selectedUserId && (
            <Form.Item label="Введіть повідомлення">
              <TextArea
                value={messageText}
                onChange={onChangeMessageArea}
                autoSize={{ minRows: 4, maxRows: 10 }}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
