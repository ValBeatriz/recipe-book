# recipe-book 🍳 🥘 🍝 🧁 🥗
Este repositorio contiene un proyecto para la gestión de recetas de cocina. La aplicación permite agregar nuevas recetas, ver las recetas existentes, editar la información de las recetas y eliminar recetas.

## Detalles técnicos 📝

- Este proyecto cuenta con las siguientes tecnologías:

- **Node.js**: Entorno de ejecución
- **Typescript**: Tipado estatico.
- **Express**: Framework.

## Instalación 📌

1-  Clonar el repositorio 👯

```bash
git clone https://github.com/ValBeatriz/recipe-book.git
```

2- Instalar dependencias ⚙:

```bash
cd recipe-book 
npm install
```


## Ejecución de pruebas 🥁

```bash
npm test
```


## Estructura del Proyecto 🧩

```bash
src/                # Código fuente TypeScript
  ├── adapters/     # Adaptadores para base de datos
  ├── config/       # Variables de configuración (como variables de entorno)
  ├── controllers/  # Controladores de la aplicación
    ├── models/     # Modelos de datos
  ├── entities/     # Estructuras según origen de datos(tablas base de datos)
  ├── mapper/       # Transformación y adaptación de los objetos
  ├── presentation/ # Exposición del servicio
  ├── repositories/ # Consultas al origen
  ├── routes/       # Rutas de la API
  ├── useCases/ 
  └── validate/     # Utilidades y funciones auxiliares
test/               # Pruebas unitarias Jasmine
  └── useCase/      # Pruebas para los casos de uso
```