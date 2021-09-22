
const handleUserInput = (key) => {
  let delay = 10 //ms
  //console.log(key)

  //console.log('')
  //process.stdout.write(key + '  handler');
  console.log('log:', key)

  if (key === '8') {
    return setTimeout(() => conn.write('Move: up'), delay)
  }

  if (key === '5') {
    return setTimeout(() => conn.write('Move: down'), delay)

  }
  if (key === '4') {
    return setTimeout(() => conn.write('Move: left'), delay)

  }
  if (key === '6') {
    return setTimeout(() => conn.write('Move: right'), delay)

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


module.exports = { setupInput }