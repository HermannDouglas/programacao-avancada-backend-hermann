// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const fs = require('fs');

// console.log('Primeiro comando.');

// fs.readFile('./text.txt', callback);

// function callback(err, content) {
//     if (err) return console.error('erro');
//     console.log(String(content));
// }

// console.log('Segundo comando.');
// console.log('Terceiro comando.');;

// Utilizando programação assíncrona
// setTimeout(myFunction, 3000);

// function myFunction() {
//     console.log('Testando a função...');
// }

// setTimeout(() => (console.log('Testando o setTimeout')), 3000);

// console.log('Comando que está após setTimeout.');


function functionDate() {
    const dt = new Date();
    const h = dt.getHours();
    const m = dt.getMinutes();
    const s = dt.getSeconds();
    console.log(`Hora: ${h}:${m}:${s}`);
}

setTimeout(functionDate, 5000);
setTimeout(functionDate, 5000);
// setTimeout(functionDate, 5000);
setInterval(functionDate, 5000);