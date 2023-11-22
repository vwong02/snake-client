const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: VIC');

    // const directions = ['Move: up', 'Move: up', 'Move: left', 'Move: left', 'Move: down', 'Move: down', 'Move: down', 'Move: up', 'Move: up', 'Move: left', 'Move: left', 'Move: left', 'Move: up', 'Move: up',];

    // let delay = 500;

    // for (const moves of directions) {
    //   setTimeout(() => {
    //     conn.write(moves);
    //   }, delay);
    //   delay += 500;
    // }
  })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = {connect};