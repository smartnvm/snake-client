const net = require("net");

const callbackFun = require('./play.js').setupInput

const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);


// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    // host: '135.23.223.133',// IP address here,
    // port: 50542// PORT number here,

    host: 'localhost',// IP address here,
    port: 50541// PORT number her
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (data) => {
    console.log("Connected! Halellujah!!!!!");
    conn.write('Name: TRX');
    console.log(data);
  })

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })

  conn.write('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })


  stdin.on('data', (key) => {

    console.log('')
    process.stdout.write(key + '....');
    let delay = 50;
    if (key === '8') {
      setTimeout(() => conn.write('Move: up'), delay)
    }

    if (key === '5') {
      setTimeout(() => conn.write('Move: down'), delay)

    }
    if (key === '4') {
      setTimeout(() => conn.write('Move: left'), delay)

    }
    if (key === '6') {
      setTimeout(() => conn.write('Move: right'), delay)

    }


    // process.stdout.write(key)

    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.stdout.write("\u0007");
      process.exit();
    }
  })


  return conn;
};


module.exports = { connect }
