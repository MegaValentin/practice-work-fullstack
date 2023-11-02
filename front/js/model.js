class Modelo {
    constructor() {
      this.data = [];
    }
  
    agregarDato(dato) {
      this.data.push(dato);
    }
  
    obtenerDatos() {
      return this.data;
    }
  }