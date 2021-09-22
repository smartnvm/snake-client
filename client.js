const net = require("net");

const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);


// establishes a connection with the game server
//135.23.223.133/50542
const connect = function () {

  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (data) => {
    console.log("Halellujah!!!!!");
    console.log(data);
    conn.write('Name: AAJ');
  })

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })

  conn.write('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })



  return conn;
};




module.exports = { connect }