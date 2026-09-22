
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const archivoDatos = path.join(__dirname, 'datos.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Obtener inventario
app.get('/api/inventario', (req, res) => {
    try {
        if (!fs.existsSync(archivoDatos)) {
            fs.writeFileSync(archivoDatos, JSON.stringify({ inventario: [] }, null, 2));
        }
        const contenido = fs.readFileSync(archivoDatos, 'utf8');
        res.json(JSON.parse(contenido));
    } catch (error) {
        res.status(500).json({ error: 'Error al leer el inventario' });
    }
});

app.listen(PORT, () => {
    console.log(Servidor corriendo en el puerto ${PORT});
});
