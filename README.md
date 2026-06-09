# High-Priority Tasks — Gestor Avanzado de Tareas

![Status: Production-Ready](https://img.shields.io/badge/Status-Production--Ready-brightgreen)
![Vue.js - v3](https://img.shields.io/badge/Vue.js-v3-42b883)

## 📝 Descripción

**High-Priority Tasks** resuelve la necesidad de organizar y priorizar el trabajo diario en un entorno ágil, permitiendo crear, clasificar y dar seguimiento a tareas con niveles de prioridad definidos (baja, media y alta). Está dirigido a equipos de producto, desarrolladores y profesionales que requieren una herramienta ligera, inmediata y sin fricciones para gestionar su flujo de trabajo. Destaca tecnológicamente por su arquitectura reactiva sobre **Vue 3** con Composition API y un pipeline de desarrollo optimizado con **Vite 8**, que garantiza arranque instantáneo, Hot Module Replacement (HMR) y builds de producción altamente eficientes.

## 🎯 Demo en Vivo

🔗 Visita la aplicación en vivo aquí:

[Ver Demo en Vivo](https://vercel.app)

## ✨ Características Principales

- **Gestión reactiva de estado** con `ref`, `computed` y `onMounted` de Vue 3, centralizando la lógica de negocio en el componente raíz (`App.vue`).
- **Comunicación padre-hijo desacoplada** mediante eventos personalizados (`add-task`, `submit-completed`, `submit-eliminate`) entre `TaskForm`, `TaskCard` y el contenedor principal.
- **Clasificación por prioridad** con niveles configurables (baja, media, alta) y badges visuales diferenciados por color en cada tarjeta de tarea.
- **Contador dinámico de progreso** que calcula en tiempo real las tareas completadas respecto al total mediante propiedades computadas.
- **Simulación de datos iniciales** con mock data en `src/data/mockTasks.js`, replicando el comportamiento de una carga de API sin dependencias externas.
- **Validación de formularios reactiva** con feedback inmediato al usuario cuando el nombre de la tarea está vacío.
- **Componentes modulares y reutilizables** (`TaskForm.vue`, `TaskCard.vue`) con estilos encapsulados mediante `scoped CSS` y diseño responsive.
- **Interfaz accesible y responsiva** con breakpoints adaptativos para dispositivos móviles y escritorio.

## 🛠️ Stack Tecnológico

### Core
- **Vue.js 3.5** — Framework progresivo con Composition API y `<script setup>`.
- **Vite 8** — Bundler y servidor de desarrollo de nueva generación con ESM nativo.

### Estilos
- **CSS nativo con variables personalizadas** — Design tokens definidos en componentes (`--primary`, `--border`, `--radius`).
- **Scoped CSS** — Encapsulamiento de estilos por componente para evitar colisiones globales.
- **Diseño responsive** — Media queries para adaptación móvil y desktop.

### Herramientas de Desarrollo
- **@vitejs/plugin-vue** — Integración oficial de Vue con el ecosistema Vite.
- **vite-plugin-vue-devtools** — Inspección avanzada del árbol de componentes y estado reactivo en desarrollo.
- **Alias `@`** — Resolución de rutas absolutas hacia `src/` configurada en `vite.config.js`.
- **Node.js** — Entorno de ejecución (`^20.19.0` o `>=22.12.0`).

## 🏗️ Arquitectura del Proyecto

```
src/
├── App.vue                 # Contenedor raíz: estado global, lógica CRUD y orquestación
├── main.js                 # Punto de entrada: bootstrap de la aplicación Vue
├── components/
│   ├── TaskForm.vue        # Formulario de creación con validación y emisión de eventos
│   └── TaskCard.vue        # Tarjeta individual: visualización, completado y eliminación
├── data/
│   └── mockTasks.js        # Dataset inicial que simula respuesta de backend
└── assets/
    ├── base.css            # Reset y estilos base globales
    └── main.css            # Estilos de layout del contenedor principal
```

Esta estructura sigue el principio de **separación de responsabilidades**: la capa de presentación vive en `components/`, los datos de prueba están aislados en `data/`, y la orquestación del estado se concentra en `App.vue`. Este patrón facilita la escalabilidad — añadir nuevos componentes, conectar una API real o integrar un store (Pinia) requiere cambios mínimos y localizados — y garantiza un código mantenible, testeable y alineado con las convenciones del ecosistema Vue 3.

## 🚀 Instalación y Configuración Local

### Requisitos previos

- **Node.js** `^20.19.0` o `>=22.12.0`
- **npm** (incluido con Node.js)

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd high-priority-tasks
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Levantar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` con recarga en caliente (HMR) activada.

### 4. Compilar para producción

```bash
npm run build
```

Los artefactos optimizados se generarán en la carpeta `dist/`.

### 5. Previsualizar el build de producción

```bash
npm run preview
```

Sirve localmente el contenido de `dist/` para validar el resultado final antes del despliegue.
