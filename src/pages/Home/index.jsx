import React, { useEffect } from "react";
import { Messages, ChatInput, ChatHeader } from "containers";
import { Sidebar } from "containers";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { dialogsActions } from "redux/actions";

import "./Home.sass";

const Home = (props) => {
  useEffect(() => {
    const dialogId = props.location.pathname.split("/").pop();
    props.setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <ChatHeader />
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default withRouter(
  connect(({ user }) => ({ user: user.data }), dialogsActions)(Home)
);
