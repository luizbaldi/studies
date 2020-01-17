// Server
const server = require('./config/server');
const port = 9090;

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}!`);
});