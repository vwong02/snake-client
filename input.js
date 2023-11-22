// const { connect } = require('./client');
const { MoveUpKey, MoveLeftKey, MoveDownKey, MoveRightKey, msg1, msg2, msg3, msg4, msg5} = require('./constants');

let connection;

// const setupInput = function(conn) {
//   connection = conn;
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.on("data", handleUserInput);
//   stdin.resume();
//   return stdin;
// };

// const handleUserInput = function(key) {
//   // your code here
//   const stdout = process.stdout;

//   const interval = function(key) {
//     func = setInterval(() => {
//       connection.write(key)
//     }, 50)
//   }
//   if (key === '\u0003') {
//     stdout.write('Sucessfully exited the game!');
//     process.exit();
//   }

//   if (key === MoveUpKey) {
//     connection.write('Move: up');
//   }

//   if (key === MoveLeftKey) {
//     connection.write('Move: left');
//   }

//   if (key === MoveDownKey) {
//     connection.write('Move: down');
//   }

//   if (key === MoveRightKey) {
//     connection.write('Move: right');
//   }

//   if (key === '1') {
//     connection.write('Say: Hello!');
//   }

//   if (key === '2') {
//     connection.write('Say: 😄😄😄');
//   }

//   if (key === '3') {
//     connection.write('Say: Have fun!');
//   }

//   if (key === '4') {
//     connection.write('Say: 🤪🤪🤪');
//   }

// };

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

let func;

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
  func = setInterval(() => {
      connection.write(key);
    }, 40);
  };
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }
  if (key === 'w') {
    clearInterval(func);
    interval(MoveUpKey);
  }
  if (key === 'a') {
    clearInterval(func);
    interval(MoveLeftKey);
  }
  if (key === 's') {
    clearInterval(func);
    interval(MoveDownKey);
  }
  if (key === 'd') {
    clearInterval(func);
    interval(MoveRightKey);
  }
  
  if (key === '1') {
    clearInterval(func);
    interval(msg1);
  }

  if (key === '2') {
    clearInterval(func);
    interval(msg2);
  }

  if (key === '3') {
    clearInterval(func);
    interval(msg3);
  }

  if (key === '4') {
    clearInterval(func);
    interval(msg4);
  }

  if (key === '5') {
    clearInterval(func);
    interval(msg5);
  }

};


module.exports = { setupInput };