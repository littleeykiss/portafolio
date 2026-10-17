# 💻 Erik GSL — Terminal Portfolio

Portafolio profesional con estética de terminal Unix, construido con **React 19**, **TypeScript** y **Vite**. Presenta la trayectoria, habilidades técnicas y experiencia laboral de **Erik Guadalupe Sánchez López** — Ingeniero en Sistemas y Desarrollador Full-Stack con +6 años de experiencia.

> 🌐 **Demo en vivo:** [portafolio-egsanchezl.vercel.app](https://portafolio-littleeykiss.vercel.app/)

---

## ✨ Características

- 🖥️ **Diseño terminal**: Interfaz inspirada en terminales Unix con estética hacker (fósforo verde, fondo oscuro, tipografía monoespaciada).
- 📂 **Navegación por modales**: Cada sección del CV se abre como una ventana de terminal independiente con barra de título y controles estilo macOS/Linux.
- ⌨️ **Efecto typewriter**: Animación de escritura progresiva en la sección de síntesis profesional.
- 📱 **Diseño responsive**: Adaptado para escritorio, tablet y dispositivos móviles.
- ⚡ **Rendimiento**: Build optimizado con Vite — bundle final ~78 KB gzip.
- 🔒 **Aviso de privacidad**: Cumplimiento con LFPDPPP integrado.

---

## 🛠️ Stack Tecnológico

| Categoría       | Tecnología                          |
|-----------------|-------------------------------------|
| **Framework**   | React 19                            |
| **Lenguaje**    | TypeScript 6                        |
| **Bundler**     | Vite 8                              |
| **Iconos**      | Lucide React                        |
| **Estilos**     | CSS custom properties + Tailwind    |
| **Linter**      | OxLint                              |
| **Deploy**      | Vercel                              |

---

## 📁 Estructura del Proyecto

```
portafolio/
├── public/                  # Archivos estáticos (favicon, assets)
├── src/
│   ├── assets/              # Recursos multimedia
│   ├── components/
│   │   ├── InteractiveTerminal.tsx   # Terminal CLI interactiva
│   │   ├── SocialIcons.tsx           # Iconos de GitHub y LinkedIn
│   │   └── TypewriterText.tsx        # Efecto de escritura progresiva
│   ├── App.tsx              # Componente principal (layout, modales)
│   ├── App.css              # Estilos del componente principal
│   ├── data.ts              # Datos del CV (experiencia, skills, etc.)
│   ├── index.css            # Variables CSS globales y paleta de colores
│   └── main.tsx             # Punto de entrada de React
├── index.html               # HTML base
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Instalación y Desarrollo

### Requisitos previos

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Clonar e instalar

```bash
git clone https://github.com/littleeykiss/portafolio.git
cd portafolio
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build de producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### Previsualizar el build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🌐 Despliegue en Vercel

El proyecto está configurado para despliegue automático con Vercel:

1. Conecta el repositorio de GitHub a [Vercel](https://vercel.com).
2. Vercel detecta automáticamente la configuración de Vite.
3. Cada `git push` a `main` genera un nuevo despliegue.

| Configuración       | Valor            |
|---------------------|------------------|
| **Framework Preset**| Vite             |
| **Build Command**   | `npm run build`  |
| **Output Directory**| `dist`           |

---

## 📄 Secciones del CV

| #  | Sección                  | Archivo simulado           |
|----|--------------------------|----------------------------|
| 01 | Síntesis Profesional     | `perfil.txt`               |
| 02 | Conocimientos Técnicos   | `stack_matrix.json`        |
| 03 | Experiencia Laboral      | `experiencia_laboral.log`  |
| 04 | Competencias Clave       | `competencias.cfg`         |
| 05 | Estudios e Idiomas       | `academico.log`            |
| 06 | Contacto Directo         | `contacto.sh`              |

---

## 📬 Contacto

- **Email:** ersalo123@gmail.com
- **LinkedIn:** [linkedin.com/in/egsanchezl](https://www.linkedin.com/in/egsanchezl/)
- **GitHub:** [github.com/littleeykiss](https://github.com/littleeykiss)

---

## 📝 Licencia

Este proyecto es de uso personal y profesional. Todos los derechos reservados © 2026 Erik Guadalupe Sánchez López.
