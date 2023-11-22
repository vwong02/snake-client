// const { connect } = require('./client');
const { MoveUpKey, MoveLeftKey, MoveDownKey, MoveRightKey, Messages } = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  const stdout = process.stdout;
  
  if (key === '\u0003') {
    stdout.write('Sucessfully exited the game!');
    process.exit();
  }

  if (key === MoveUpKey) {
    connection.write('Move: up');
  }

  if (key === MoveLeftKey) {
    connection.write('Move: left');
  }

  if (key === MoveDownKey) {
    connection.write('Move: down');
  }

  if (key === MoveRightKey) {
    connection.write('Move: right');
  }

  if (key === '1') {
    connection.write('Say: Hello!');
  }

  if (key === '2') {
    connection.write('Say: 😄😄😄');
  }

  if (key === '3') {
    connection.write('Say: Have fun!');
  }

  if (key === '4') {
    connection.write('Say: 🤪🤪🤪');
  }

};




module.exports = { setupInput };