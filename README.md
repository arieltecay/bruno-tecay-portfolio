# Bruno Tecay - Portafolio Profesional

Este proyecto es una versión web innovadora, responsiva e interactiva del CV de Bruno Tecay. Diseñado con una arquitectura moderna para destacar su perfil dual como Contador Público y Especialista en RRHH.

## 🚀 Tecnologías
- **React 19**
- **Vite 6**
- **Tailwind CSS 4** (Configuración nativa)
- **Framer Motion** (Animaciones y menús expandibles)
- **Lucide React** (Iconografía profesional)

## 📁 Estructura del Proyecto
- `src/data/cv-data.ts`: Contiene toda la información del CV centralizada para fácil edición.
- `src/components/sections/`: Secciones principales (Hero con Bento Grid, Experiencia expandible, Habilidades).
- `src/index.css`: Configuración de temas con variables CSS nativas de Tailwind 4.

## 🛠️ Instalación y Desarrollo
1. Clona el repositorio:
   ```bash
   git clone <tu-url-de-github>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🌐 Publicación
Para publicar en GitHub Pages:
1. Asegúrate de que `vite.config.ts` tenga el `base` correcto si no usas un dominio personalizado.
2. Ejecuta `npm run build`.
3. Sube el contenido de la carpeta `dist` a tu rama de `gh-pages` o configura GitHub Actions.

---
Proyecto creado por **Ariel Tecay Software Engineer** para Bruno Tecay.
