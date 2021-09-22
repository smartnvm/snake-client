
//host: '135.23.223.133'
//10.0.2.15
// localhost <--- my address
// port <----- 3001

const net = require('net');
const stdin = process.stdin;
const conn = net.createConnection({
  port: 50541,
  host: 'localhost'
}, () => {
  console.log("General Kanobi!")
})

const name = "Snake 1"

conn.setEncoding('utf8');
stdin.setEncoding('utf8');

//conn.write(`${name} has connected!!!`);

//const stdin = process.stdin;
// don't worry about these next two lines of setup work.
//stdin.setEncoding('utf8');
stdin.setRawMode(true);
////////////
// Event Handling for User Input
////////////

  // process.stdin.on('keypress', (str, key) => {
  //   if ( key.name === 'c') {


// on any input from stdin (standard input), output a "." to stdout

stdin.on('data', (key) => {
  
  process.stdout.write('.');
  process.stdout.write("\u0007");
  
 // console.log(key)
 // process.stdout.write(key)

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
});



conn.on('data', (data) => {
  console.log("DATA CAME IN!!!!!");
  console.log(data);
})

// zubuin 
// employement social development sinyy



//console.log('after callback');
