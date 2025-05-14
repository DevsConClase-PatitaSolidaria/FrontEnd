/**
 * Autor: @leccapedro
 * Descripción: Modelo de entidad para representar una mascota disponible para adopción.
 * Incluye atributos personales, físicos, logísticos y médicos para su visualización, filtrado y detalle.
 */

export interface AdoptionEntity {
  id: number;           // Identificador único de la mascota
  name: string;         // Nombre de la mascota
  age: number;          // Edad en años (puede ser decimal)
  species: string;      // Especie (ej. Perro, Gato)
  breed: string;        // Raza o tipo de la mascota
  gender: string;       // Género (Macho / Hembra)
  location: string;     // Ciudad o sede donde se encuentra
  imageUrl: string;     // URL de la imagen de la mascota
  size: string;         // Tamaño (Pequeño / Mediano / Grande)
  hair: string;         // Tipo de pelo (Corto / Mediano / Largo)
  activity: string;     // Nivel de actividad (Bajo / Medio / Alto)
  weight: string;       // Peso estimado (Ligero / Mediano / Pesado)

  // Nuevos campos para vista de detalle
  description?: string;       // Descripción general del comportamiento o historia del animal
  rescue_story?: string;      // Cómo fue rescatado
  rescued_by?: string;        // Organización o persona que lo rescató
  health?: string;            // Estado de salud general
  vaccinated?: boolean;       // Si está vacunado o no
  vaccination_record?: {      // Registro de vacunación con fecha, dosis y vacunas aplicadas
    date: string;
    doses: number;
    vaccines: string[];
  }[];
}
