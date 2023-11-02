class Vista {
    constructor() {
      this.contenedor = document.getElementById('datos');
    }
  
    mostrarDatos(datos) {
      this.contenedor.innerHTML = '';
      datos.forEach(dato => {
        const elemento = document.createElement('div');
        elemento.textContent = dato;
        this.contenedor.appendChild(elemento);
      });
    }
  }