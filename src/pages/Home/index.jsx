import React from "react";
import { DialogsList, Messages, ChatInput, ChatHeader } from "containers";
import { TeamOutlined, FormOutlined } from "@ant-design/icons";
import { Button } from "antd";

import dialogsJSON from "./../../dialogs.json";

import "./Home.sass";

const Home = (props) => {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>Список діалогів</span>
            </div>
            <Button type="link" icon={<FormOutlined />} />
          </div>
          {/* //sidebar-search was be here */}
          <div className="chat__sidebar-dialogs">
            <DialogsList userId={0} items={dialogsJSON} />
          </div>
        </div>
        <div className="chat__dialog">
          <ChatHeader />
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
