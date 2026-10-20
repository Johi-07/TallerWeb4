const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Permite la comunicación entre React (Frontend) y Express (Backend)
app.use(cors());
app.use(express.json());

// Endpoint 4: api/health
app.get('/api/health', (req, res) => {
    res.json({ message: "El API esta funcionando correctamente" });
});

// Endpoint 5: api/info
app.get('/api/info', (req, res) => {
    res.json({
        status: "API activa",
        integrantes: [
            {
                carnet: "000xxxx26", // Pon tu carnet real aquí
                ciudadOrigen: "San Salvador", // Tu ciudad
                carrera: "Tecnología en Desarrollo de Software", // Tu carrera
                proyectosRealizados: 4 // La cantidad de proyectos
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});