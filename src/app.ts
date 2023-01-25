import express from "express";
import gamesRoute from "./routes/games.route.js";
import usersRoute from "./routes/user.route.js";
import genresRoute from "./routes/genre.route.js";

const server = express();
server.use(express.json());

server.use(gamesRoute);
server.use(usersRoute);
server.use(genresRoute);

server.listen(5000, () => {
  console.log("Server running on Port 5000");
});
