# Imagen de base
FROM node:latest

# Directorio de trabajo
WORKDIR /usr/src/app

# Copio los archivos de tu aplicación al contenedor
COPY package*.json ./

# Instalo las depencias
RUN npm install

# Copio el resto de los archivos
COPY . .

# Puerto que escucha la aplicacion
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["node", "app.js"]