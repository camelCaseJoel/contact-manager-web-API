Manejador de Contactos Web-API
==============================

Esta es una simple aplicación hecha *desde cero*(sin frameworks) en 2 días(inicialmente) como ejercicio/prueba. Luego será mejorada y se le dedicará más tiempo.

Es un simple Restful API / app de manejo de contactos.


El API (rutas):
--------------

```
GET    167.99.234.18/api/contact
POST   167.99.234.18/api/contact  --- accepts json { firstname: <string>, lastname: <string>, email: <string> }
DELETE 167.99.234.18/api/contact  --- accepts json {id: <number>}
POST   167.99.234.18/api/phone    --- accepts json { contact_id: <number> , phone: <string> }
GET    167.99.234.18/api/phone
DELETE 167.99.234.18/api/phone    --- accepts json {id: <number>}
```

Instrucciones de instalación:
-----------------------------
- Intalar **Mysql**
- Mysql , restaurar archivo **contacts_app.sql**
- Clonar repositorio.
- Intalar Node & NPM
- correr comando **npm install** para installar depenencias
- configurar archivo Config.js
- correr comando **npm start**


Aquí está el REST JSON API, **desde cero**, sin frameworks:


https://github.com/camelCaseJoel/contact-manager-web-API


Las instrucciones de instalación las pondré en el README.md
-----------------------------------------------------------

Características:
----------------
-Arquitectura en capas

**Clases del app(modularización):**
- Config
- Server
- Controller
- Handler
- DBConnection


