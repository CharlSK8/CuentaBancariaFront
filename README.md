# Gestión de Usuarios

Este proyecto es una aplicación de gestión de usuarios desarrollada en Node.js. La aplicación permite a los usuarios realizar las siguientes acciones:

- **Login**: Los usuarios pueden iniciar sesión en la aplicación utilizando sus credenciales.
- **Registro**: Los nuevos usuarios pueden registrarse proporcionando la información requerida.
- **Perfil**: Una vez iniciada la sesión, los usuarios pueden ver la información de su perfil.

Esta aplicación es ideal para gestionar la autenticación y la información básica de los usuarios en cualquier proyecto web.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías y dependencias:

### Dependencias

- **axios**: Cliente HTTP basado en promesas para el navegador y node.js.
- **bcryptjs**: Biblioteca para encriptar contraseñas utilizando el algoritmo bcrypt.
- **cookie-parser**: Middleware para analizar cookies en las solicitudes HTTP.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.
- **ejs**: Motor de plantillas para generar HTML con JavaScript.
- **express**: Framework web para Node.js, utilizado para construir aplicaciones web y APIs.
- **jsonwebtoken**: Implementación de JSON Web Tokens para la autenticación y autorización.
- **nodemon**: Herramienta que reinicia automáticamente la aplicación de Node.js cuando detecta cambios en los archivos.

## Estructura del Proyecto

```
├── node_modules
├── public
│   ├── css
│   └── images
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   └── views
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Instalación
1. Clona el repositorio:
    ```bash
    git clone https://github.com/CharlSK8/CuentaBancariaFront.git
    ```
2. Instala las dependencias:
    ```bash
    cd CuentaBancariaFront
    
    ```
3. Configura las variables de entorno en un archivo `.env`:
    ```
    PORT=4000
    AUTH_URL=http://localhost:8080/api/v1/auth
    ```


## Uso
1. Inicia el servidor:
    ```bash
    npm run dev
    ```
2. Accede a la API en `http://localhost:4000`.
3. Si no tienes cuanta registrate `http://localhost:4000/register`.