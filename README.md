# DANI ALV — Next.js Website

DJ Profesional & Instructor — Mendoza, Argentina

## Setup

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Deploy en Vercel (gratis)

1. Subí el proyecto a GitHub
2. Entrá a [vercel.com](https://vercel.com)
3. Importá el repo → Deploy automático

## Personalización

### Cambiar número de WhatsApp
Buscá `5492614000000` en los archivos y reemplazalo por el número real.
Formato internacional sin `+`: país + código de área + número.
Ej: Argentina Mendoza → `5492614XXXXXXX`

### Cambiar nombre
Buscá `DANI ALV` y reemplazalo por el nombre real del DJ.

### Cambiar imágenes
Reemplazá los archivos en `/public/`:
- `hero.png` → foto del Hero (pantalla completa)
- `sobre-mi.png` → foto de la sección Sobre Mí
- `dj-booth.png` → foto extra (disponible para usar)

### Cambiar eventos
Editá el array `events` en `/components/Eventos.tsx`

### Cambiar colores
Editá `tailwind.config.ts` → sección `colors`

## Estructura del proyecto

```
dani-alv/
├── app/
│   ├── globals.css      # Estilos globales + animaciones
│   ├── layout.tsx       # Layout raíz con fuentes
│   └── page.tsx         # Página principal
├── components/
│   ├── Navbar.tsx       # Navbar responsiva con menú mobile
│   ├── Hero.tsx         # Hero fullscreen
│   ├── SobreMi.tsx      # Bio + foto + stats
│   ├── Servicios.tsx    # 3 cards de servicios
│   ├── Clases.tsx       # Tabla/cards de cursos
│   ├── Eventos.tsx      # Lista de eventos
│   ├── Contacto.tsx     # CTA con WhatsApp
│   └── Footer.tsx       # Footer con redes sociales
├── public/
│   ├── hero.png
│   ├── sobre-mi.png
│   └── dj-booth.png
├── tailwind.config.ts
├── next.config.js
└── package.json
```
