# NodeJS Basico

## Comprobar version de NodeJS
```bash
node --version
```
Para reiniciar el tutorial puedes ejecutar el siguiente comando para borrar todo y comenzar desde cero.
```bash
rm -Rf testnodejs
```

## Comprobar version de npm
```bash
npm --version
```

## Crear un nuevo directorio
```bash
mkdir testnodejs ; cd testnodejs
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

## Abrir index.js
<walkthrough-editor-open-file filePath="./NodeJS-Basico/testnodejs/index.js"
                              text="Abrir index.js">
</walkthrough-editor-open-file>


## Ejecutar servidor Web con Node.js
```bash
node index.js
```

## Navegar en nuestro sitio web
<walkthrough-spotlight-pointer spotlightId="devshell-web-preview-button"
                               text="Abrir navegador Web en puerto 8080">
</walkthrough-spotlight-pointer>


## Copiar ejemplo de servidor web en Express.js
Antes de continuar debemos abortar la ejecución del comando node, presionando "CTRL + C" en la consola
```bash
cp ../index-express.js ./index.js
```

## Abrir index.js
<walkthrough-editor-open-file filePath="./NodeJS-Basico/testnodejs/index.js"
                              text="Abrir index.js">
</walkthrough-editor-open-file>

## Ejecutar servidor Web con Express.js
```bash
node index.js
```
La ejecución fallara, ya que Node.js no encuentra el modulo Express.js
Antes de continuar debemos abortar la ejecución del comando node, presionando "CTRL + C" en la consola


## Instalar modulo Express.js
Antes de continuar debemos abortar la ejecución del comando node, presionando "CTRL + C" en la consola
```bash
npm install express
```

## Abrir package.json (ver cambios despues de instalar Express.js)
<walkthrough-editor-open-file filePath="./NodeJS-Basico/testnodejs/package.json"
                              text="Abrir package.json">
</walkthrough-editor-open-file>

## Ejecutar servidor Web con Express.js (con modulo cargado!)
```bash
node index.js
```

## Navegar en nuestro sitio web
<walkthrough-spotlight-pointer spotlightId="devshell-web-preview-button"
                               text="Abrir navegador Web en puerto 8080">
</walkthrough-spotlight-pointer>

## Detener servidor web con Express.js
Antes de finalizar debemos abortar la ejecución del comando node, presionando "CTRL + C" en la consola
