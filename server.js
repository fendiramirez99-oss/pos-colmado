,const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
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
        const data = JSON.parse(contenido);
        res.json(data.inventario || []);
    } catch (e) {
        res.json([]);
    }
});

// Guardar producto
app.post('/api/inventario', (req, res) => {
    try {
        let data = { inventario: [] };
        if (fs.existsSync(archivoDatos)) {
            data = JSON.parse(fs.readFileSync(archivoDatos, 'utf8'));
        }
        
        const nuevo = {
            id: (data.inventario.length + 1).toString(),
            nombre: req.body.nombre,
            precio: Number(req.body.precio),
            stock: Number(req.body.stock)
        };

        data.inventario.push(nuevo);
        fs.writeFileSync(archivoDatos, JSON.stringify(data, null, 2));
        res.json({ ok: true, producto: nuevo });
    } catch (e) {
        res.status(500).json({ error: "No se pudo guardar" });
    }
});

app.listen(PORT, () => {
    console.log(Servidor listo en http://localhost:${PORT});
});