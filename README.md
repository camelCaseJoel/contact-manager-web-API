Manejador de Contactos Web-API
==============================
Esta es una simple aplicación hecha *desde cero*(sin frameworks) en 2 días(inicialmente) como ejercicio/prueba. Luego será mejorada y se le dedicará más tiempo.


**Favor ignorar código del cliente que se encuentra en el directorio /client**
... fué escrito sólo para fines de prueba de forma muy rápida. Es puro 'spaghetti code'


Es un Restful API/app de manejo de contactos.

Mejoras pendientes:
------------------
- Minimizar duplicación de código.
- Implementar patrón **Data Mapper**.
- Implementar patrón **Domain Model** en la capa de lógica de negocio.
- Talvez, escribir un cliente nuevo o implementar patrón MVC.


El API (rutas):
--------------

```
GET    /api/contact
POST   /api/contact  --- accepts json { firstname: <string>, lastname: <string>, email: <string> }
DELETE /api/contact  --- accepts json {id: <number>}
POST   /api/phone    --- accepts json { contact_id: <number> , phone: <string> }
GET    /api/phone
DELETE /api/phone    --- accepts json {id: <number>}
```

Instrucciones de instalación:
-----------------------------
- Intalar **Mysql**
- Mysql , restaurar archivo **contacts_app.sql**
- Clonar repositorio.
- Intalar Node & NPM
- correr comando **npm install** para installar depenencias
- configurar archivo Config.js
- transpilar código TypeScript  hacia carpeta **/build**
- correr comando **npm start**. Esto correrá el código transpilado en **/build**


Características requeridas:
---------------------------
-Arquitectura en capas

**AlClases del app(modularización):**
- Config
- Server
- Controller
- Handler
- DBConnection


