/**
 * Autor: @leccapedro
 * Descripción: Modelo que representa los criterios de filtrado para el listado de mascotas en adopción.
 * Cada propiedad es opcional y corresponde a un filtro disponible en la interfaz del usuario.
 */

export interface AdoptionFilter {
  gender?: string;     // Filtro por género (Macho / Hembra)
  age?: string;        // Filtro por categoría de edad (Cachorro / Adulto / Mayor)
  size?: string;       // Filtro por tamaño (Pequeño / Mediano / Grande)
  hair?: string;       // Filtro por largo de pelo (Corto / Mediano / Largo)
  activity?: string;   // Filtro por nivel de actividad (Bajo / Medio / Alto)
  weight?: string;     // Filtro por tipo de peso (Ligero / Mediano / Pesado)
}
