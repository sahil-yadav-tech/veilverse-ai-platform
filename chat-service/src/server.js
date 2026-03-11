console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI❤️");
import http from "http";
import dotenv from "dotenv";
import app from "./app.js";
import { initSocket } from "./socket/socketServer.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5003;

const server = http.createServer(app);

initSocket(server);

connectDB();

server.listen(PORT, () => {
  console.log(`Chat service running on port ${PORT}`);
});
