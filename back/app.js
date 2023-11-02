const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde el backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});