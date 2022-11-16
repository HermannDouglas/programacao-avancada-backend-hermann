const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
    // res.write('<h1>Olá!</h1>');
    // res.end();
    // res.end(console.log(req));
    // Definindo rotas para a aplicação
    const file =  req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(__dirname, 'public', file);
    const extname = path.extname(filePath);

    const allowedFileTypes = ['.html', '.js', '.css'];
    const allowed = allowedFileTypes.find(
        (item) => item === extname
    )
    
    if (!allowed) return;
    
    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err 
                res.end(content)
        }
    );
    // if (req.url === '/contato') {
    //     res.end('<h1>Contato</h1>');
    // }
    
}).listen(5000, () => (console.log('Servidor rodando...')));
