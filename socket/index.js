import { Server } from 'socket.io';

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  const sessionCounter = {};
  io.on('connection', (socket) => {
    const id = socket.handshake.query.id;
    if (sessionCounter[id]) {
      sessionCounter[id]++;
    } else {
      sessionCounter[id] = 1;
    }
    const totalSessionsConnect = Object.keys(sessionCounter).length;
    io.emit('sessionCount', totalSessionsConnect);

    socket.on('disconnect', () => {
      if (!sessionCounter[id]) {
        return;
      }
      if (sessionCounter[id] === 1) {
        delete sessionCounter[id];
        const totalSessionsConnect = Object.keys(sessionCounter).length;
        io.emit('sessionCount', totalSessionsConnect);
        return;
      }

      sessionCounter[id]--;
      return;
    });

    socket.on('error', (error) => {
      console.error('Connection error:', error);
    });
  });
};

export default initializeSocket;
