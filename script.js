

const http = require('http');
let countHome = 0;
let countAbout = 0;

const server = http.createServer((req, res) =>{
    
    if(req.url === '/'){
        countHome++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <p>Просмотрено ${countHome} раз</p>
                    <a href="/about">Переход на страницу About</a>
                </body>
            </html>
        `);
    } else if (req.url === '/about'){
        countAbout++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
        <html>
            <head><title>About</title></head>
            <body>
                <p>Просмотрено ${countAbout} раз</p>
                <a href="/">Переход на страницу /</a>
            </body>
        </html>
    `);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});