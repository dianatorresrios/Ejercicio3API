const express = require('express');
const app = express();

// Crear un nuevo artículo
app.post('/api/articulos', (req, res) => {
  const { titulo, contenido } = req.body;
  const nuevoArticulo = crearArticulo(titulo, contenido);
  res.json(nuevoArticulo);
});

// Obtener todos los artículos
app.get('/api/articulos', (req, res) => {
  const listaArticulos = obtenerArticulos();
  res.json(listaArticulos);
});

// Otros endpoints para actualizar y eliminar artículos

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});
