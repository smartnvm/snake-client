const net = require("net");

const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);

const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: IP,         // IP address here,
    port: PORT        // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (data) => {
    console.log("Connected! Halellujah!!!!!");
    conn.write('Name: AJ');
    //console.log(data);
  })

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })

  console.log('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })


  return conn;
};


module.exports = { connect }
