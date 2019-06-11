Manejador de Contactos Web-API
==============================

Instrucciones de instalación:
-----------------------------
-Intalar **Mysql**
-Mysql , restaurar archivo **contacts_app.sql**
-Clonar repositorio.
-Intalar Node & NPM
-correr comando **npm install** para installar depenencias
-configurar archivo Config.js
-correr comando **npm start**

Aquí está el REST JSON API, desde cero, sin frameworks:
Cada archivo creado por mí, escrito en TypeScript/Node.js (ver /src/  folder). Ver Commits para más detalles.


https://github.com/camelCaseJoel/contact-manager-web-API


Las instrucciones de instalación las pondré en el README.md
-----------------------------------------------------------

Características:
----------------
-Arquitectura MVC

**Clases del app(modularización):**
- Config
- Server
- Controller
- Handler
- DBConnection


Cumplí con BONUS:
-----------------
- Se pueden agregar varios teléfonos a contactos
- Creación de aplicación cliente desde cero, sin librerías ni frameworks -> http://167.99.234.18/ ( el deployment de la aplicación es otro bonus!  :D  )
- Un poquito de validación, si dejan el form de creación de contacto vacío

Pueden usar el Web API en este servidor: 

http://167.99.234.18/

El link anterior permite usar el API con una interfaz gráfica que también desarollé desde cero, sin librerías ni frameworks. No pude modularizar el código del cliente por falta de tiempo, pero es un  Bonus extra 

Para usar el API, usar estas rutas: 
```
GET    167.99.234.18/api/contact
POST   167.99.234.18/api/contact  --- accepts json { firstname: <string>, lastname: <string>, email: <string> }
DELETE 167.99.234.18/api/contact  --- accepts json {id: <number>}
POST   167.99.234.18/api/phone    --- accepts json { contact_id: <number> , phone: <string> }
GET    167.99.234.18/api/phone
DELETE 167.99.234.18/api/phone    --- accepts json {id: <number>}
```