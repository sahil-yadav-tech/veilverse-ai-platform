import { useEffect } from "react";
// import { socket } from "../socket/socket";

export const useSocket = () => {

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return socket;
};