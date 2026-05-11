// Configuración de pre-renderizado para GitHub Pages
// Estas rutas se pre-renderizarán en build time para mejorar SEO y tiempo de carga
// Los esquemas JSON-LD estarán disponibles para crawlers desde el HTML estático

export default {
  routes: [
    '/',                    // Página principal
    '/#hero',              // Sección Hero
    '/#categories',        // Categorías de servicios
    '/#services',          // Servicios completos
    '/#about',             // Acerca de
    '/#offers',            // Ofertas especiales
    '/#contact',           // Contacto
    '/#privacy'            // Política de privacidad
  ]
};