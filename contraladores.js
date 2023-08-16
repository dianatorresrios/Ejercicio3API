// Controlador de artículos
const articulos = [];

function crearArticulo(titulo, contenido) {
  const nuevoArticulo = new Articulo(articulos.length + 1, titulo, contenido, new Date());
  articulos.push(nuevoArticulo);
  return nuevoArticulo;
}

function obtenerArticulos() {
  return articulos;
}

// Otros métodos para actualizar y eliminar artículos
