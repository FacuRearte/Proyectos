// si no es en local, puede que necesites poner el dominio
//dentro de los parentesis.
const socket = io();

//
let message = document.getElementById("message");
let username = document.getElementById("username");
let boton = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

boton.addEventListener("click", function () {
  socket.emit("chat:message", {
    username: username.value,
    message: message.value,
  });
  console.log("Enviado");
});

message.addEventListener("keypress", function () {
  socket.emit("chat:typing", username.value);
});

socket.on("chat:message", function (data) {
  actions.innerHTML = "";
  output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
    </p>`;
});

socket.on("chat:typing", function (data) {
  actions.innerHTML = `<p><em>${data} is typing a message</em></p>`;
});
