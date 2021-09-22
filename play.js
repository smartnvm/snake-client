const { connect } = require('./client')


const handleUserInput = (key) => {
  let delay = 10 //ms
  console.log('log:', key)

  if (key === '8') {
    return setTimeout(() => ('Move: up'), delay)
  }

  if (key === '5') {
    return setTimeout(() => ('Move: down'), delay)

  }
  if (key === '4') {
    return setTimeout(() => ('Move: left'), delay)

  }
  if (key === '6') {
    return setTimeout(() => ('Move: right'), delay)

  }

  if (key === '\u0003') {
    process.stdout.write("\u0007");
    process.exit();
  }

};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  console.log('log:', stdin)
  return stdin;
}


console.log("Connecting ...");

connect();

module.exports = { setupInput }
