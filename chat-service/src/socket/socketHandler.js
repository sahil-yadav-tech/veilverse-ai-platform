import { SOCKET_EVENTS } from "./events.js";
import { saveMessage } from "../services/message.service.js";

export const handleSocketConnection = (io, socket) => {

  console.log("User connected:", socket.id);

  socket.on(SOCKET_EVENTS.SEND_MESSAGE, async (data) => {

    const savedMessage = await saveMessage(data);

    io.emit(SOCKET_EVENTS.RECEIVE_MESSAGE, savedMessage);

  });

  socket.on(SOCKET_EVENTS.DISCONNECT, () => {
    console.log("User disconnected:", socket.id);
  });

};


export const handleSendMessage = (io, socket) =>{
  socket.on(SOCKET_EVENTS.HANDLEMESSAGE, async(data) => {
    console.log("Message from frontend", data );
  })
}