# Demo Angular
Esta solución se creó usuando node v16.15.1 y npm 8.11.0.
Descargar VS Code https://code.visualstudio.com/download
Descargar la ultima versión de Node (LTS) https://nodejs.org/en/download/



Instrucciones para ejecutar la solución:

### Confirmar que se tenga node instalado.

   Desde el  command prompt, digite `node -v` para verificar que se tenga la version `14.15.0` o más reciente.

1) Descomprima el archivo zip.

2) Navegue al folder Angular Demo.

   Verifique el archivo package.json

3) Desde VS Code cargue el folder Angular Demo

4) Clickee el Tab Terminal, para desplegar la terminal dentro de VS Code, cerciore que el path del folder sea el que contenga el archivo package.json, digite `npm install`.
   Todo los dependencies seran ejecutados.
   Esto creará el node_modules folder e instalará todos los paquetes en package.json dentro de ese folder. Pueden verse algunas alertas pero no deben aparecer errores en la instalación.
   Si aparece un mensaje indicando run `nmp audit fix` o `nmp audit` ignore ese mensaje.
   
4) En la misma terminal digite `npm start`, la primer vez que se ejecute el comando aparecera una pregunta sobre compartir el uso de data, puede indicar N para No.

   Luego de compilar, la aplicación será desplegada en el Web Browser.
   



