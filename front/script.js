const modelo = new Modelo();
const vista = new Vista();
const controlador = new Controlador(modelo, vista);

document.getElementById('agregarBtn').addEventListener('click', () => {
  const dato = document.getElementById('datoInput').value;
  controlador.agregarDato(dato);
  document.getElementById('datoInput').value = '';
});