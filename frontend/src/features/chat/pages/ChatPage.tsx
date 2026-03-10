import { useEffect } from "react";
import { socket } from "../../../core/socket/socket";

const ChatPage = () => {

  useEffect(() => {

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("receive_message", (data) => {
      console.log("Message:", data);
    });

  }, []);

  const sendMessage = () => {

    socket.emit("send_message", {
      message: "Hello from frontend"
    });

  };

  return (
    <button onClick={sendMessage}>
      Send Message
    </button>
  );
};

export default ChatPage;