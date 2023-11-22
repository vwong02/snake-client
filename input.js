const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput }