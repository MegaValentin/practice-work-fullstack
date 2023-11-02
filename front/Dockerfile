# Imagen base
FROM node:latest

# Directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Construye tu aplicación (esto puede variar según tu proyecto)
RUN npm run build

# Expon el puerto que escucha tu aplicación (si es necesario)
EXPOSE 3000

# Comando para iniciar tu aplicación (esto puede variar según tu proyecto)
CMD ["node", "nombre_de_tu_archivo_principal.js"]
