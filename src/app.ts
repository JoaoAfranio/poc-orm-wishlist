import express from "express";
import gamesRoute from "./routes/games.route.js";

const server = express();
server.use(express.json());

server.use(gamesRoute);

server.listen(5000, () => {
  console.log("Server running on Port 5000");
});
