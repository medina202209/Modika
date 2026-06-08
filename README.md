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
		Proyectos.jsx
        Contacto.jsx
	App.jsx
	main.jsx
	index.css
```

## Arquitectura y Navegacion

El proyecto usa enrutado por paginas con un layout compartido.

- `Layout.jsx`: estructura general (Navbar + contenido + Footer).
- `Navbar.jsx`: menu desktop/mobile con links a las 4 paginas activas y estado de link activo.
- `Footer.jsx`: cierre de marca y copyright.

### Rutas actuales

- `/` -> Inicio
- `/proyectos` -> Proyectos
- `/nosotros` -> Nosotros
- `/contacto` -> Contacto

## Identidad de Marca MODIKA

### Concepto de marca

Diseno + Carpinteria Arquitectonica.

MODIKA debe percibirse como una firma premium de diseno y carpinteria arquitectonica, orientada a constructoras, arquitectos, hoteles y proyectos residenciales de alto valor.

### Paleta oficial

| Color | HEX |
|---|---|
| Negro Arquitectonico | `#111111` |
| Blanco Arquitectonico | `#F5F5F3` |
| Gris Concreto | `#D9D9D6` |
| Nogal Natural | `#8A6242` |
| Teka Oscura | `#6C4A32` |

### Tipografia oficial

- Familia principal: Montserrat.
- Montserrat Bold: titulos y portadas.
- Montserrat SemiBold: subtitulos.
- Montserrat Medium: datos destacados.
- Montserrat Regular: texto corrido.

### Personalidad de marca

Sofisticada, calida, arquitectonica, precisa, serena, contemporanea, versatil y confiable.

### Regla de oro

80% Arquitectura, 20% Carpinteria.

La carpinteria es el producto. La arquitectura es la marca.

## Sistema Visual

Se trabaja con utilidades nativas de Tailwind (sin CSS custom de componentes).

- Base oscura: `zinc` (aprox. Negro Arquitectonico).
- Base clara: `stone` (aprox. Blanco Arquitectonico y Gris Concreto).
- Acento principal: `amber` (aprox. Nogal Natural y Teka Oscura).

Lineamientos:

- Mantener consistencia de escala (`100, 200, 500, 700`, etc.).
- Evitar colores hex custom dentro de clases.
- Priorizar estilos reutilizables por patrones de layout.
- Mantener el balance de marca: predominio arquitectonico visual y acentos de carpinteria.

## Estado Actual

- Estructura principal de paginas y rutas: lista.
- Navbar responsive alineado a 4 paginas: listo.
- Indicador visual de pagina activa en navbar: listo.
- Formulario de contacto (frontend): listo.

## Pendientes Recomendados

- Reemplazar contenido placeholder por copy real de marca.
- Completar contenido final de la pagina Proyectos.
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

