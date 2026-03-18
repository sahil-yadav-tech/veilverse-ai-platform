import { Server } from "socket.io";
import { handleSendMessage, handleSocketConnection } from "./socketHandler.js";
import { SOCKET_EVENTS } from "./events.js";

export const initSocket = (server) => {

  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on(SOCKET_EVENTS.CONNECTION, (socket) => {
    handleSocketConnection(io, socket);
    handleSendMessage(io, socket)
  });

};