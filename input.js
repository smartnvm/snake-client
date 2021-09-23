let conn

const { CTRL } = require("./constants");


const handleUserInput = (key) => {
  let delay = 50 //ms
  if (key === '\u0003') {
    //console.log('log:', key)
    process.stdout.write("\u0007");
    process.exit();
  }


  for (const keys in CTRL) {

    if (keys === key) {

      conn.write(CTRL[key]);
      // setTimeout(() => conn.write(CTRL[key]), delay)

    }
  }


};



const setupInput = (clientConn) => {
  conn = clientConn;
  //console.log(conn)

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  //console.log('log:', stdin)
  return stdin;
}


//setupInput();
module.exports = { setupInput }