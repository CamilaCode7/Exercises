// Importando o pacote NET, responsavel pela implementação dos sockets no Node.
const net = require('net');

// Criando o servidor com o método 'create Server' onde recebe uma conexao na qual são exposto
// os eventos que pode manipular o servidor 
const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  connection.on('end', () => {
// o metodo '.on()' escuta um evento em especifico e quando é ativado, a função de callback é chamada.
    console.log('CLiente desconectado');
  });

  connection.write('Mensage do servidor!\r\n');
// Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente.
  connection.pipe(connection)  
});

const PORT = 8080

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta 8080`);
});