import { socket } from "./socket";

export const connectSocket = () => {
  if (!socket.connected) {
    socket.connect();
    console.log("Socket connected");
  }
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};