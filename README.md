## Guía de instalación: 

- Asegurate de tener instalada la versión 7.4.16 de aplicación _Xampp_, de no ser así, dirígete a su [página de descarga](https://www.apachefriends.org/download.html)  
- Accede a tu línea de comandos y clona el repositorio en la ubicación donde has guardado tu aplicación xampp, dentro de la carpeta htdocs. la ruta debe verse similar a esto: `../xampp/htdocs` ejecuta el comando ` git clone https://github.com/Heli-Aguilar/ProyectoFinalCW2021_Recover.git `

## Configuración del proyecto
1. Entra a Xampp y enciende los servidores _Apache_ y _MySQL_ con el botón "start"
2. Identifica la ruta donde has almacenado las carpetas del repositorio y dirígete a la carpeta "docs", en ella encontraras un archivo sql.
3. Abre tu línea de comandos y dirígete a la ruta donde tienes instalado Xampp
4. Desde dicha ruta, navega hasta la carpeta bin de mysql. Ejemplo: `cd ../xampp/mysql/bin`
5. En esa ubicación ejecuta el comando: `mysql -u root`, entrarás a una interfaz de sql
6. Ejecuta el comando `CREATE DATABASE proyectofinal`
7. Ejecuta el comando `USE proyectofinal`
8. ¿Recuerdas la ruta del archivo sql que consultaste en el paso 2? Para instalar la base de datos ejecuta el comando de la siguiente forma `source rutaAbsoluta/proyecto_FinalCW2021/docs/proyectoFinal.sql`
9. Una vez que se han completado estos pasos, puedes utilizar el sitio. En tu navegador escribe la ruta de la siguente forma: ***Recuerda omitir las carpetas xampp/htdocs, localhost actua como esta ruta*** `localhost/rutaDelRepositorio`
