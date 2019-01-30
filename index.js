let http = require('http');
let port = process.env.PORT;


if (port == null || port == "") {
    port = 8000;
}

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola soy miguel\n');
});

app.listen(port, () => {
    console.log(`Server running at port :${port}/`);
});