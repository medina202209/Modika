# Modika - Sitio Web

Landing y sitio corporativo para servicios de diseno y carpinteria arquitectonica de alta gama.

## Objetivo

Construir un sitio moderno, escalable y facil de mantener para:

- Presentar la marca y su propuesta de valor.
- Mostrar servicios especializados.
- Captar leads desde formulario de contacto.
- Mantener una base visual consistente con Tailwind CSS.

## Stack Tecnologico

- React + Vite
- React Router DOM
- Tailwind CSS

## Scripts Disponibles

### Desarrollo local

```bash
npm run dev
```

### Build de produccion

```bash
npm run build
```

### Preview de build

```bash
npm run preview
```

## Estructura del Proyecto

```text
src/
	components/
		Layout.jsx
		Navbar.jsx
		Footer.jsx
	pages/
		Inicio.jsx
		Nosotros.jsx
        proyectos.Jsx
        Contacto.jsx
	App.jsx
	main.jsx
	index.css
```

## Arquitectura y Navegacion

El proyecto usa enrutado por paginas con un layout compartido.

- `Layout.jsx`: estructura general (Navbar + contenido + Footer).
- `Navbar.jsx`: menu desktop/mobile, submenu de servicios, estado de link activo.
- `Footer.jsx`: cierre de marca y copyright.

### Rutas actuales

- `/` -> Inicio
- `/nosotros` -> Nosotros
- `/proyectos` -> Proyectos
- `/contacto` -> Contacto

## Sistema Visual

Se trabaja con utilidades nativas de Tailwind (sin CSS custom de componentes).

- Base oscura: `zinc`
- Base clara: `stone`
- Acento principal: `amber`

Lineamientos:

- Mantener consistencia de escala (`100, 200, 500, 700`, etc.).
- Evitar colores hex custom dentro de clases.
- Priorizar estilos reutilizables por patrones de layout.

## Estado Actual

- Estructura principal de paginas y rutas: lista.
- Navbar responsive con dropdown de servicios: listo.
- Indicador visual de pagina activa en navbar: listo.
- Formulario de contacto (frontend): listo.

## Pendientes Recomendados

- Reemplazar contenido placeholder por copy real de marca.
- Agregar seccion/galeria de proyectos (portafolio).
- Integrar backend para envio real de formularios.
- Definir estrategia SEO basica (metadatos por pagina).

## Flujo basico con Git

### Configuracion inicial

```bash
git init
git remote add origin URL_DEL_REPOSITORIO
```

1. Inicializa Git en el proyecto.
2. Vincula el repositorio remoto.

### Trabajo diario

```bash
git status
git add .
git commit -m "mensaje"
git pull origin main
git push origin main
```

1. Revisa el estado actual.
2. Agrega cambios al stage.
3. Crea un commit descriptivo.
4. Trae cambios remotos antes de subir.
5. Publica tus cambios en `main`.

### Ejemplo recomendado de commit

```bash
git commit -m "feat: agrega pagina de proyectos"
```

## Notas

- Este README debe evolucionar junto con el proyecto.
- Cada nueva funcionalidad debe reflejarse aqui (rutas, decisiones tecnicas y estado).

