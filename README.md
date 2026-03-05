# UniGrades CSS Tracer

A React + TypeScript application built with Vite for analyzing and visualizing university grades data with CSS transformation tracing.

## Setup and Running

### Prerequisites
- Node.js 18+ and npm

### Setup
```bash
npm install
```

### Running in Development
```bash
npm run dev
```
This starts the development server with hot module replacement (HMR) on `http://localhost:5173`.

### Building for Production
```bash
npm run build
```
This compiles TypeScript and bundles the application for production.

### Previewing Production Build
```bash
npm run preview
```

## CSS Transformation Process

The CSS transformation pipeline works as follows:

1. **Source CSS Files**: Author-written CSS files in `src/` (e.g., `App.css`, components `*.css`)
2. **Vite Processing**: During development and build, Vite processes CSS modules:
   - CSS is parsed and optimized
   - PostCSS transformations are applied
   - CSS modules are resolved and linked to corresponding JavaScript
3. **Output**: Final CSS is extracted and served to the browser with source map support for debugging

Throughout this pipeline, source maps are generated and maintained, allowing you to trace the final CSS back to the original source files in your browser's developer tools.

## Generated CSS and Source Maps

**Location**: `dist/` directory (created after running `npm run build`)

- **CSS File**: `dist/assets/index-*.css` - The optimized, bundled CSS served to the browser
- **CSS Source Map**: `dist/assets/index-*.css.map` - Maps minified CSS back to original source files
- **JavaScript Source Maps**: `dist/assets/index-*.js.map` - Maps transpiled JavaScript to source TypeScript

Source maps enable you to:
- Inspect original CSS in browser DevTools even though minified CSS is served
- Click through to source files directly from the Styles panel
- Debug CSS transformations and trace them back to their origin