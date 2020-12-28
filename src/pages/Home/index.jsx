import React from "react";
import { Messages, Status, ChatInput } from "components";
import { DialogsList } from "containers";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";

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
            <DialogsList
              userId={0}
              items={dialogsJSON}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Ilon Mask</b>
              <div className="chat__dialog-header-status">
                <Status online={true} />
              </div>
            </div>
            <Button
              type="link"
              icon={<EllipsisOutlined style={{ fontSize: "22px" }} />}
            />
          </div>
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
