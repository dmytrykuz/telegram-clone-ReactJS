import React from "react";

import { Message, DialogsList } from "components";

import "./Home.sass";

const Home = (props) => {
  return (
    <section className="home">
      <Message
        avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
        audio="https://cdn-static.namobilu.com/u/ring/f/563/088/nurminskij_ment_na_menya_gazuet.mp3"
        date="Mon Oct 12 2020 11:10:09"
      />

      {/* <div className="dialogs">
        <DialogsList
          userId={0}
          items={[
            {
              _id: Math.random(),
              user: {
                _id: 1,
                fullname: "Федор Достоевский",
                avatar:
                  "https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png",
                isOnline: true,
                isMe: true,
              },
              text:
                "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваш",
              isReaded: false,
              unreaded: 4,
              created_at: "Wed Nov 17 2020 20:45:04",
            },
            {
              _id: Math.random(),
              user: {
                _id: 1,
                fullname: "Ilon Mask",
                avatar:
                  "https://e3.365dm.com/18/09/2048x1152/skynews-elon-musk-weed_4414031.jpg",
                isOnline: false,
                isMe: true,
              },
              text:
                "Привет, как дела?",
              isReaded: false,
              unreaded: 0,
              created_at: "Wed Nov 18 2020 20:45:04",
            },
          ]}
        ></DialogsList>
      </div> */}

      {/* <Message
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

      <Message
        avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
        date="Mon Oct 12 2020 11:10:09"
        isMe="true"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
        ]}
      />

      <Message
        avatar="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
        isTyping
      /> */}
    </section>
  );
};

export default Home;
