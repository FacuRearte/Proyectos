![home](https://user-images.githubusercontent.com/73850740/133543932-e14c79c8-52cc-4ec5-8e68-9a8024bbc8c1.png)
![Typing](https://user-images.githubusercontent.com/73850740/133543936-fcdf018b-0a6f-40a6-af16-fa3cecd1abbe.png)
![Msg](https://user-images.githubusercontent.com/73850740/133543938-362d607a-680c-487f-8b2c-b0305a2e9791.png)


### `Guia de pasos`
1. npm init --yes.
2. npm i express .
3. npm i socket.io.
4. npm i nodemon.
5. configurar nodemon en package.json en dev.
6. npm run dev.
7. seteamo express en el archivo para mostrar.
8. seteamos el puerto de express().
9. app.listen y seteamos get('port).
10. crear carpeta public => index.html .
11. seteamos los archivos estáticos en index.js.
// Son archivos que una vez se envian al servidor no cambian.
12. app.use(express.static(path.join(__dirname, public)))
// Para que se envie la carpeta public al navegador, y siempre va a agarrar index.html
13. Requerimos SocketIO en el archivo de index
14. Guardamos el servidor en una variable para poder utilizarla luego.
15. Ejecutamos la variable SocketIO y le pasamos directamente la variable server.
const io = SocketIO(server);
16. Y esa variable de SocketIO, la guardamos en otra variable, para poder utilizarla mas rápido luego, en mi caso será 'io'.
17. Esto significa que cuando alguien se conecte, ejecute la función.
io.on('connection', () => {})
18. Nos traemos el script 'src="/socket.io/socket.io.js"' en el HTML, que es el que hace la conexión bi-direccional.
19. Ahora tenemos io() en todo nuestro html, por que si hacemos io(), nos dejará por consola lo que pusimos.
20. EL FLOW DEL PROGRAMA ES EL SIGUIENTE: 
El servidor se inicia => Manda los archivos del front-end al navegador => Este ejecuta el socket.io => El socket.io al recibir un 'connection', ejecuta un console.log del token de la ventana de navegador, este va cambiando si refrescamos o si abrimos otra pestaña.
21. Capturamos los elementos que pusimos en el html por getElementByID.
22. Al boton le ponemos un event listener y al haber un click, socket.emit, manda los datos en forma de objeto.
22. Ponemos el emit en archivo del servidor, y le decimos 'io.sockets.emit' para que re-envie todo a los demas sockets conectados.

### `Archivo .env`
