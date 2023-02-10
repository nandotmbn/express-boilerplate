import { Server, Socket } from 'socket.io';

let interval: number;

function WebSocket(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log(`${socket.id} is connected`);
    socket.on('disconnect', () => {
      clearInterval(interval);
    });
  });
}

export default WebSocket;
