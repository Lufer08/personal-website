# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Portafolio Personal - React + TypeScript + Vite

Un portafolio profesional y elegante construido con React, TypeScript, Tailwind CSS y Flowbite.

## 🚀 Características

- **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles y desktop
- **Componentes Modernos**: Utiliza Flowbite React para componentes elegantes
- **Animaciones Suaves**: Transiciones y efectos hover profesionales
- **SEO Friendly**: Estructura semántica optimizada
- **Rendimiento Optimizado**: Vite para desarrollo rápido y builds optimizados

## 📝 Personalización

Para personalizar tu portafolio, reemplaza todos los placeholders `[TEXTO]` con tu información real:

### Información Personal
- `[TU NOMBRE]` - Tu nombre completo
- `[TU PROFESIÓN]` - Tu título profesional (ej: "Desarrollador Full Stack")
- `[TU ESPECIALIDAD]` - Tu especialización (ej: "React y Node.js")
- `[TU EMAIL@EJEMPLO.COM]` - Tu dirección de email
- `[TU_TELÉFONO]` - Tu número de teléfono
- `[TU_CIUDAD, PAÍS]` - Tu ubicación

### Fotos y URLs
- `[URL_DE_TU_FOTO_DE_PERFIL]` - URL de tu foto de perfil
- `[URL_DE_TU_FOTO_PROFESIONAL]` - URL de tu foto profesional
- `[URL_DE_TU_CV_PDF]` - URL de tu CV en PDF
- `[URL_DE_TU_LINKEDIN]` - URL de tu perfil de LinkedIn
- `[URL_DE_TU_GITHUB]` - URL de tu perfil de GitHub

### Sobre Mí
- `[UNA BREVE DESCRIPCIÓN DE TI Y TU PASIÓN POR LO QUE HACES]` - Descripción personal
- `[PARRAFO_1_SOBRE_TU_TRAYECTORIA_Y_EXPERIENCIA]` - Primer párrafo de tu historia
- `[PARRAFO_2_SOBRE_TUS_OBJETIVOS_Y_VALORES]` - Segundo párrafo
- `[PARRAFO_3_SOBRE_TU_APASIONAMIENTO_POR_LA_PROFESIÓN]` - Tercer párrafo

### Habilidades Técnicas
- `[TECNOLOGÍA_1]` a `[TECNOLOGÍA_6]` - Nombres de tecnologías
- `[PORCENTAJE_1]` a `[PORCENTAJE_6]` - Niveles de dominio (ej: 85, 90, etc.)
- `[HERRAMIENTA_1]` a `[HERRAMIENTA_6]` - Herramientas adicionales

### Proyectos
Para cada proyecto (1, 2, 3):
- `[NOMBRE_DEL_PROYECTO_X]` - Nombre del proyecto
- `[DESCRIPCIÓN_BREVE_DEL_PROYECTO_X]` - Descripción corta
- `[TECNOLOGÍA_USADA_X]` - Tecnologías utilizadas
- `[URL_DEL_PROYECTO_X]` - URL del proyecto desplegado
- `[URL_DEL_CÓDIGO_X]` - URL del repositorio

### Experiencia Profesional
Para cada puesto (1, 2, 3):
- `[PUESTO_X]` - Nombre del puesto
- `[EMPRESA_X]` - Nombre de la empresa
- `[FECHA_INICIO_X]` - Fecha de inicio (ej: "Enero 2023")
- `[FECHA_FIN_X]` - Fecha de fin (ej: "Presente")
- `[DESCRIPCIÓN_DE_LAS_RESPONSABILIDADES_Y_LOGROS_EN_ESTE_PUESTO_X]` - Descripción detallada

### Contacto
- `[TIPO_DE_OPORTUNIDADES_QUE_BUSCAS]` - Tipo de oportunidades (ej: "proyectos freelance, posiciones full-time")

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clona el repositorio
git clone [URL_DE_TU_REPOSITORIO]

# Entra al directorio
cd portafolio

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

### Build para Producción
```bash
# Construye la aplicación
npm run build

# Vista previa del build
npm run preview
```

### Linting
```bash
# Ejecuta ESLint
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── App.tsx          # Componente principal del portafolio
├── index.css        # Estilos globales con Tailwind
└── main.tsx         # Punto de entrada de la aplicación

public/
└── vite.svg         # Icono de Vite

tailwind.config.js   # Configuración de Tailwind CSS
vite.config.ts       # Configuración de Vite
```

## 🎨 Tecnologías Utilizadas

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utilitario
- **Flowbite React** - Componentes UI
- **ESLint** - Linting y formateo de código

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- 📱 Móviles (320px - 768px)
- 📟 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

## 🚀 Despliegue

Puedes desplegar este portafolio en cualquier plataforma que soporte aplicaciones React:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Railway**
- **Heroku**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Si encuentras algún problema o tienes sugerencias de mejora, ¡no dudes en abrir un issue o enviar un pull request!

---

**Desarrollado con ❤️ usando React, TypeScript, Tailwind CSS y Flowbite**

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
