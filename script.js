// Modelo de artículo
class Articulo {
  constructor(id, titulo, contenido, fecha) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.fecha = fecha;
  }
}

// Modelo de ticket
class Ticket {
  constructor(id, numeroReferencia, estado, descripcion) {
    this.id = id;
    this.numeroReferencia = numeroReferencia;
    this.estado = estado;
    this.descripcion = descripcion;
  }
}
