// const { connect } = require('./client');
const { MoveUpKey, MoveLeftKey, MoveDownKey, MoveRightKey, msg1, msg2, msg3, msg4, msg5} = require('./constants');

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

let intervalKey;

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
  intervalKey = setInterval(() => {
      connection.write(key);
    }, 40);
  };
  if (key === '\u0003') {
    stdout.write("Sucessfully exited the game!");
    process.exit();
  }
  if (key === 'w') {
    clearInterval(intervalKey);
    interval(MoveUpKey);
  }
  if (key === 'a') {
    clearInterval(intervalKey);
    interval(MoveLeftKey);
  }
  if (key === 's') {
    clearInterval(intervalKey);
    interval(MoveDownKey);
  }
  if (key === 'd') {
    clearInterval(intervalKey);
    interval(MoveRightKey);
  }
  
  if (key === '1') {
    clearInterval(intervalKey);
    interval(msg1);
  }

  if (key === '2') {
    clearInterval(intervalKey);
    interval(msg2);
  }

  if (key === '3') {
    clearInterval(intervalKey);
    interval(msg3);
  }

  if (key === '4') {
    clearInterval(intervalKey);
    interval(msg4);
  }

  if (key === '5') {
    clearInterval(intervalKey);
    interval(msg5);
  }

};


module.exports = { setupInput };