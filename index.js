// index.js
const express = require('express');
const app = express();
require('dotenv').config(); 

// Render usa la variable de entorno PORT para saber qué puerto usar.
const PORT = process.env.PORT || 3000;

// 1. **ENDPOINT /:** Cuando alguien visite tu URL, verán este mensaje.
app.get('/', (req, res) => {
    // Aquí puedes confirmar que el secreto de Supabase está disponible
    const dbUrl = process.env.DATABASE_URL ? "CONECTADO" : "FALTA SECRETO";
    
    res.send(`
        <h1>¡La app 3691212ai está corriendo!</h1>
        <p>Estado de la conexión (clave cargada): ${dbUrl}</p>
        <p>El servidor permanece activo en el puerto ${PORT}.</p>
    `);
});

// 2. **INICIAR EL SERVIDOR:** Este bloque hace que la aplicación NO se cierre.
app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en el puerto ${PORT}`);
    // Aquí iría el código de inicialización de Supabase si fuera necesario.
});

// *** Nota: Aquí ya tienes la variable process.env.DATABASE_URL disponible para usarla ***
