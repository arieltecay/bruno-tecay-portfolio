/**
 * Script para inicializar el seguimiento de Google Analytics (GA4).
 * Este script debe ejecutarse una sola vez al cargar la aplicación.
 */

(function initializeAnalytics(): void {
  // Obtener el ID desde las variables de entorno de Vite
  const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn(
      'ADVERTENCIA: La variable VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID no está definida en el entorno. ' +
      'El seguimiento de Google Analytics está deshabilitado.'
    );
    return;
  }

  // Cargar la librería gtag.js si aún no está cargada (carga asíncrona)
  if (typeof window.gtag === 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  // Inicializar dataLayer y la función gtag
  window.dataLayer = window.dataLayer || [];
  
  // Implementación estándar de gtag según documentación oficial de GA4
  window.gtag = function gtag(): void {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  // Configuración inicial
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  console.log('Google Analytics configurado exitosamente con ID:', measurementId);
})();

/**
 * Utilidad global para trackear eventos personalizados.
 * @param eventName Nombre del evento (ej: 'generate_lead')
 * @param params Parámetros adicionales (ej: { method: 'whatsapp' })
 */
export const trackEvent = (eventName: string, params?: Record<string, any>): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};
