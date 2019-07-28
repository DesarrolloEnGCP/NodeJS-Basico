# NodeJS Basico

## Comprobar version de NodeJS
```bash
node --version
```

## Comprobar version de npm
```bash
npm --version
```

## Crear un nuevo directorio
```bash
mkdir testnodejs && cd testnodejs
```

## Crear un nuevo proyecto
```bash
npm init
```

## Abrir package.json
<walkthrough-editor-open-file filePath="./NodeJS-Basico/testnodejs/package.json"
                              text="Abrir package.json">
</walkthrough-editor-open-file>

## Copiar ejemplo de servidor web en Node.js
```bash
cp ../index.js .
```

## Abrir package.json
<walkthrough-editor-open-file filePath="./NodeJS-Basico/testnodejs/package.json"
                              text="Abrir package.json">
</walkthrough-editor-open-file>

## Copiar ejemplo de servidor web en Node.js
```bash
cp ../index.js .
```

## Abrir package.json
<walkthrough-editor-open-file filePath="./NodeJS-Basico/testnodejs/index.js"
                              text="index.js">
</walkthrough-editor-open-file>




## Ejecutar un contenedor Web (nombre: hola-web)

Usaremos la imagen ofician de NGIX (Servidor Web*) desde el repositorio oficial de DockerHub: https://hub.docker.com/_/nginx

```bash
docker run --name hola-web -p 8080:80 -v $(pwd):/usr/share/nginx/html:ro -d nginx
```




## Navegar en nuestro sitio web (hola-mundo)
<walkthrough-spotlight-pointer spotlightId="devshell-web-preview-button"
                               text="Abrir navegador Web en puerto 8080">
</walkthrough-spotlight-pointer>

## Ver Contenedores (solo los en ejecución)
```bash
docker container ls
```

## Ver Imagenes Descargadas (ahora tenemos dos)
```bash
docker image ls
```

## Detener el contenedor (hola-web)
```bash
docker stop hola-web
```

## Volver a Navegar en nuestro sitio web (falla, el contenedor ya no esta en ejecución)
<walkthrough-spotlight-pointer spotlightId="devshell-web-preview-button"
                               text="Abrir navegador Web en puerto 8080">
</walkthrough-spotlight-pointer>




