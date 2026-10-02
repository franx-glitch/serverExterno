const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {

    if (req.url === "/" || req.url === "/index.html") {

        const archivo = path.join(__dirname, "Royal-Cell.html");

        fs.readFile(archivo, (error, contenido) => {

            if (error) {
                res.writeHead(500, {
                    "Content-Type": "text/plain; charset=utf-8"
                });

                res.end("Error al cargar Royal-Cell.");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });

            res.end(contenido);
        });

        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("Página no encontrada.");
});

servidor.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});