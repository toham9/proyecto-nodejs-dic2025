# Proyecto final de desarrollo backend con Node.js
# Autor:Ernesto Blejer
# Version: 1.0
# Fecha: Diciembre 2025
# Premisa: Actualmente nuestro cliente tiene diversos productos en catálogo. 
#         Precisa disponer de una API Rest desde donde su tienda oficial pueda administrarlos.
#         Para eso deberá Leer, Crear, Actualizar y Eliminar la información sobre los productos.
#         La aplicación debe contar con una capa de autenticación para resguardad la seguridad de los datos.
#         Dichos datos que estarán alojados en una base de datos en la nube mediante el servicio Firestore de Firebase.
#         La aplicación debe contemplar el manejo de errores de forma clara.

## Requisitos

# Requerimiento #1: Configuración Inicial

#	Crear un directorio donde alojarás tu proyecto e incluye un archivo index.js como punto de entrada.#
#	Iniciar Node.js y configura npm usando el comando npm init -y.
#	Agrega la propiedad "type": "module" en el archivo package.json para habilitar ESModules.
#	Configura un script llamado start para ejecutar el programa con el comando npm run start.

# Requerimiento #2: Instalación de dependencias

#	Instala express, cors, dotenv, firebase y jsonwebtoken como dependencias del proyecto.

# Requerimiento #3: Configuración del servidor

#	Crea un servidor web con express y realiza su configuración en el archivo index.js.
#	Configura CORS para habilitar las peticiones de origen cruzado para que las aplicaciones Frontend de la empresa  pueden consultar al servicio.
#	Establece un middleware que maneje las rutas desconocidas, devolviendo el estado 404 y un mensaje.
#	Crea un archivo .env donde se alojarán las variables de entorno del proyecto.

# Requerimiento #4: Rutas

#	Crear la capa de rutas del proyecto.
#	Establecer las rutas necesarias para atender las peticiones que interactúan con productos.
#	Establecer la ruta de login para autenticar usuarios.

# Requerimiento #5: Controladores

#	Crear la capa de controladores para cada una de las rutas establecidas en el requerimiento anterior.

# Requerimiento #6: Acceso a los datos

#	Crear la capa de modelos de la aplicación.
#	Crear un nuevo proyecto de Firestore en Firebase. 
#	Agregar una colección para registrar nuevos productos y crear el primer documento de producto para darle estructura y tipos de datos.
#	Configurar y conectar Firebase en el proyecto.
#	Utilizar la instancia de Firebase creada y crea los métodos necesarios para que el modelo pueda interactuar con la base de datos remota.

# Requerimiento #7: Protege tus rutas

#	Configurar JWT en el proyecto
#	Crear un middleware de autenticación y protege las rutas correspondientes
#	Agrega la lógica necesaria en la en controlador de login para validar la identidad del usuario y devolver un Bearer Token.

# node.js: version 22.19.0
# npm: version 10.9.3
# cors: version 2.8.5
# dotenv: 17.2.3
# express: 5.2.1
# firebase: 12.6.0
# jsonwebtoken: 9.0.3

# Compandos para la herramienta de prueba de la API en Vercel
#
# (A) REGISTRO INICIAL DEL USER > POST > proyecto-nodejs-dic2025.vercel.app/api/auth/register
#      Ejemplo Body: { "email": "test4@demo.com", "password": "2026test" }
# 
# (B) LOGIN DEL USER > POST > proyecto-nodejs-dic2025.vercel.app/api/auth/login
#       Ejemplo Body: { "email": "test4@demo.com", "password": "2026test" }
#       Obtengo el TOKEN (*)
#
# (C) LISTAR PRODUCTOS DEL CATALOGO > GET > proyecto-nodejs-dic2025.vercel.app/api/products
#       Ejemplo Auth > Bearer (copiado desde lo obtenido sin comillas desde (*))
#
# (D) LISTAR UN PROD DESDE SU ID > GET > (ejemplo) proyecto-nodejs-dic2025.vercel.app/api/products/fWcLPA9w3oUK6x7l9vp6
#       Ejemplo Auth > Bearer (copiado desde lo obtenido sin comillas desde (*))
#
# (E) CREAR UN PRODUCTO > POST > proyecto-nodejs-dic2025.vercel.app/api/products
#     Ejemplo Body: 
#      {
#        "name": "Producto 3",
#        "categories": [
#        "hogar", "oferta" ],
#        "price": 350
#      }
#
#      Ejemplo Auth > Bearer (copiado desde lo obtenido sin comillas desde (*))
#
# (F) MODIFICAR UN PRODUCTO > PUT > (ejemplo) proyecto-nodejs-dic2025.vercel.app/api/products/fWcLPA9w3oUK6x7l9vp6
#     Ejemplo Body: 
#      {
#        "name": "Producto 3",
#        "categories": [
#        "hogar", "Black-day" ],
#        "price": 150
#      }
#     
# (G) ELIMINAR UN PRODUCTO > DELETE > (ejemplo) proyecto-nodejs-dic2025.vercel.app/api/products/fWcLPA9w3oUK6x7l9vp6
#