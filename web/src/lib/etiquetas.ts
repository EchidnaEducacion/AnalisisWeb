// Etiquetas del blog: vocabulario cerrado, explicado en modelo-contenido.md (Etiquetas del blog).
// Una etiqueta que no esté aquí hace fallar la publicación; para añadir una, primero en esa lista y aquí.
// Va aparte de content.config.ts, sin dependencias de Astro, para que la use también scripts/nueva-entrada.ts
export const ETIQUETAS = [
  // Placas
  'EchidnaShield', 'EchidnaBlack', 'EchidnaBlack2',
  // Entornos de programación
  'EchidnaML', 'EchidnaScratch', 'Snap4Arduino', 'IDE Arduino',
  // Componentes
  'Servomotor', 'LED', 'Sensor de luz', 'Temperatura', 'Micrófono', 'Joystick', 'Sensores externos',
  // Temas
  'Inteligencia Artificial', 'STEAM', 'Makey Makey', 'Música', 'Juegos',
  // Eventos
  'OSHWDem', 'esLibre',
] as const;
