import io from "socket.io-client";

const socket = io(window.location.origin.replace("3000", "4000"), {
  transports: ["websocket", "polling", "flashsocket"],
});

export default socket;
