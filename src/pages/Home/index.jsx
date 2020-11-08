import React from "react";

import { Message } from "components";

import "./Home.sass";

const Home = (props) => {
  return (
    <section className="home">
      <Message
        avatar="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png"
        text="Hello!"
        date="Mon Oct 11 2020 11:10:09"
      />

      <Message
        avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
        text="Hello, mutterfucker :DDD"
        date="Mon Oct 12 2020 11:10:09"
        isMe={true}
        isReaded={true}
      />

      <Message
        avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
        text="Fuck off bitch"
        date="Mon Oct 12 2020 11:10:09"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water",
          },
        ]}
      />

      <Message avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png" isTyping/>
    </section>
  );
};

export default Home;
