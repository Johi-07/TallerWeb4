const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ message: "El API esta funcionando correctamente" });
});

app.get('/api/info', (req, res) => {
    res.json({
        status: "API activa",
        integrantes: [
            {
                carnet: "00138821",
                ciudadOrigen: "San Salvador",
                carrera: "Ingeniería Informática",
                proyectosRealizados: 4
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
