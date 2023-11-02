class Controlador {
    constructor(modelo, vista) {
      this.modelo = modelo;
      this.vista = vista;
    }
  
    agregarDato(dato) {
      this.modelo.agregarDato(dato);
      const datos = this.modelo.obtenerDatos();
      this.vista.mostrarDatos(datos);
    }
  }