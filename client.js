const net = require("net");

const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);


// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: '10.0.2.15',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (data) => {
    console.log("Halellujah!!!!!");
    console.log(data);
  })
  
  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  })
  

  return conn;
};



console.log("Connecting ...");
connect();


module.exports =  {connect}