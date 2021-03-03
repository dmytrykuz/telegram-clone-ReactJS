import React from "react";
import { Messages, ChatInput, ChatHeader } from "containers";
import { Sidebar } from "containers";

import "./Home.sass";

const Home = (props) => {
  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
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
