let conn




const ctrl = {
  '8': "Move: up",
  '4': "Move: left",
  '5': "Move: down",
  '6': "Move: right"
}

const handleUserInput = (key) => {
  let delay = 50 //ms
  if (key === '\u0003') {
    console.log('log:', key)
    process.stdout.write("\u0007");
    process.exit();
  }


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
  if (key === 'w') {
    setTimeout(() => conn.write('Say: wtf'), delay)
  }
  
  if (key === 'h') {
    setTimeout(() => conn.write('Say: hello'), delay)
  }
  
  if (key === 'b') {
    setTimeout(() => conn.write('Say: bye!'), delay)
  }
  

  if (key === 'e') {
    setTimeout(() => conn.write('Say: RUN EBUKA!'), delay)
  }





};



const setupInput = (clientConn) => {
  conn = clientConn;
  console.log(conn)

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