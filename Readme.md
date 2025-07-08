**Readme.md Hecho Con IA**

# CRUD de Usuarios con Exportación de Datos

Este es un proyecto de API RESTful construido con Node.js y Express. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre usuarios y exportar la lista de usuarios a formatos CSV y PDF.

## Características

-   **Gestión de usuarios completa:** CRUD para crear, leer, actualizar y eliminar usuarios.
-   **Autenticación segura:** Contraseñas hasheadas con bcrypt.
-   **Base de datos:** Utiliza Sequelize como ORM para interactuar con una base de datos MySQL.
-   **Exportación de datos:** Endpoints para generar archivos CSV y PDF con los datos de los usuarios.
-   **Configuración flexible:** Usa variables de entorno para la configuración de la base de datos y el servidor.

## Requisitos Previos

-   [Node.js](https://nodejs.org/) (v18 o superior)
-   [pnpm](https://pnpm.io/) (o cualquier otro gestor de paquetes como npm o yarn)
-   Una base de datos MySQL en ejecución.

## Instalación y Configuración

1.  **Clona el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd crud-exports
    ```

2.  **Instala las dependencias:**

    ```bash
    pnpm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables con tus credenciales:

    ```properties
    PORT=4000
    DB_NAME=tu_base_de_datos
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_HOST=localhost
    DB_PORT=3306
    ```

## Scripts Disponibles

-   **Iniciar el servidor en modo de desarrollo:**
    Este comando utiliza `nodemon` para reiniciar automáticamente el servidor cuando detecta cambios en los archivos.

    ```bash
    pnpm run dev
    ```

-   **Iniciar el servidor en producción:**

    ```bash
    pnpm start
    ```

## Estructura de la API

La URL base para todos los endpoints es `http://localhost:4000/api`.

### Endpoints de Usuarios (`/api/user`)

| Método | Ruta              | Descripción                     | Cuerpo de la Petición (JSON)                                     | Respuesta Exitosa (2xx)                                                              |
| :----- | :---------------- | :------------------------------ | :--------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| `POST` | `/`               | Crea un nuevo usuario.          | `{"firstName", "email", "age", "password"}`                      | `201 Created`: Devuelve el objeto del nuevo usuario.                                 |
| `GET`  | `/`               | Obtiene todos los usuarios.     | _Ninguno_                                                        | `200 OK`: Devuelve un array con todos los usuarios.                                  |
| `GET`  | `/:id`            | Obtiene un usuario por su ID.   | _Ninguno_                                                        | `200 OK`: Devuelve el objeto del usuario encontrado.                                 |
| `PUT`  | `/:id`            | Actualiza un usuario por su ID. | `{"firstName", "email", "age"}` (campos opcionales)              | `200 OK`: Devuelve el objeto del usuario actualizado.                                |
| `DELETE` | `/:id`            | Elimina un usuario por su ID.   | _Ninguno_                                                        | `200 OK`: Devuelve un mensaje de confirmación.                                       |

### Endpoints de Exportación (`/api/export`)

| Método | Ruta         | Descripción                                       | Respuesta Exitosa (200 OK)                                                              |
| :----- | :----------- | :------------------------------------------------ | :-------------------------------------------------------------------------------------- |
| `GET`  | `/csv`       | Genera y devuelve un archivo CSV con los usuarios. | Devuelve el contenido del archivo CSV con `Content-Type: text/csv`.                     |
| `GET`  | `/pdf`       | Genera y devuelve un archivo PDF con los usuarios. | Devuelve el contenido del archivo PDF con `Content-Type: application/pdf`.              |

---

Este `README.md` debería ayudar a cualquiera a entender y utilizar tu proyecto rápidamente. ¡Espero que te sea de gran utilidad# CRUD de Usuarios con Exportación de Datos

Este es un proyecto de API RESTful construido con Node.js y Express. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre usuarios y exportar la lista de usuarios a formatos CSV y PDF.

