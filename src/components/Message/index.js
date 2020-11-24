import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import waveSvg from "assets/svg/wave.svg";
import playSvg from "assets/svg/play.svg";
import pauseSvg from "assets/svg/pause.svg";

import { Time, ReadedStatus } from "../";
import { convertCurrentTime } from "utils/helpers";

import "./Message.sass";

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  isTyping,
  attachments,
  audio,
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioElement = useRef(null);

  useEffect(() => {
    audioElement.current.addEventListener(
      "playing",
      () => {
        setIsPlay(true);
      },
      false
    );
    audioElement.current.addEventListener(
      "ended",
      () => {
        setIsPlay(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );
    audioElement.current.addEventListener(
      "pause",
      () => {
        setIsPlay(false);
      },
      false
    );
    audioElement.current.addEventListener("timeupdate", () => {
      const duration = (audioElement.current && audioElement.current.duration) || 0;
      setCurrentTime(audioElement.current.currentTime);
      setProgress((audioElement.current.currentTime / duration) * 100);
    });
  }, []);

  const togglePlay = () => {
    if (!isPlay) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  };

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--isAudio": audio,
        "message--image": attachments && attachments.length === 1,
      })}
    >
      <div className="message__content">
        <div className="message__readed-status">
          <ReadedStatus isMe={isMe} isReaded={isReaded} />
        </div>
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && (
                <div className="message__audio">
                  <audio ref={audioElement} src={audio} preload="auto" />
                  <div className="message__audio-progress" style={{width: progress + "%"}}></div>
                  <div className="message__audio-info">
                    <div className="message__audio-btn">
                      <button onClick={togglePlay}>
                        {isPlay ? (
                          <img src={pauseSvg} alt="Pause svg" />
                        ) : (
                          <img src={playSvg} alt="Play svg" />
                        )}
                      </button>
                    </div>
                    <div className="message__audio-wave">
                      <img src={waveSvg} alt="Wave svg" />
                    </div>
                    <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
                  </div>
                </div>
              )}
            </div>
          )}
          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}
          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const MessageBackup = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  isTyping,
  attachments,
}) => {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1,
      })}
    >
      <div className="message__content">
        <div className="message__readed-status">
          <ReadedStatus isMe={isMe} isReaded={isReaded} />
        </div>
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          )}
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default Message;
