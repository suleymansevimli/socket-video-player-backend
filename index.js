const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { allow: "*" } });

io.on("connection", (socket) => {
  socket.on("video-on", () => {
    io.emit("video-on", { play: true });
  });

  socket.on("video-off", () => {
    io.emit("video-off", { play: false });
  });
});

http.listen(5000, function () {
  console.log("Server started on 5000 port");
});
