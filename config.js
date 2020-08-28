/**
 * --- Creamos este archivo donde debemos tener una variable de entrono que vamos a crear en Heroku, en esta variable de entorno vamos a agregar el link de nuestra DB.
 * --- Una vez tenemos creado este archivo vamos a crear la variable de entorno en Heroku -> settings
 * 
 * --- Ahora vamos a continuar con nuestra opción de levantar el servidor, ya que como vamos a desplegar nuestra aplicación debemos hacer algunas configuraciones:
 * ----------- Sacamos a nodemon de dependencies y creamos una para dev.
 * 
 * --- Eliminamos nuestro archivo connectiondb.js del .gitIgnore.
 * -------- En ese archivo llamamos la variable de entorno creada y la reemplazamos por la conexión a mongo
 * 
 * 
 *--- En el archivo index.js vamos a hacer un ajuste al puerto donde nos escucha el servidor.

 -------------------------Subimos todo y verificamos si nos funciona... vemos los logs de errores keroku logs
 */

module.exports = {
    //mongoDB = process.env.MONGODB || 'mongodb+srv://FalconTravelAdmin:falcontravel2020@falcontraveldb.lyowp.mongodb.net/falconTravelDB?retryWrites=true&w=majority'
    mongoDB: process.env.MONGODB || 'mongodb://localhost:27017/falconTravelDB'
}