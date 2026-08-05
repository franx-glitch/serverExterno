const http = require("http");

const PORT = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>Servidor funcionando</h1>
        <p>Este servidor está en Internet al fin xdddd.</p>
        <marquee direction="right" behavior="alternate">Me salio</marquee>
    `);
});

servidor.listen(PORT, () => {
    console.log("Servidor iniciado");
});