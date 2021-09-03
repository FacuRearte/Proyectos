const express = require("express");
const app = express();
const path = require("path");
const SocketIO = require("socket.io");

// Archivos estáticos y puertos estáticos.
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public")));
// Iniciamos el server
const server = app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

// WebSocket
const io = SocketIO(server);

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  socket.on("chat:message", (data) => {
    io.sockets.emit("chat:message", data);
  });

// cuando quiero emitir a todos menos yo, usamos 
// broadcast, sinó con emit, envia a todos incluyendonos.
  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });

});
