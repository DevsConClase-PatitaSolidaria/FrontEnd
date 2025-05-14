/**
 * Autor: @leccapedro
 * Descripción: Pipe personalizado para filtrar una lista de mascotas por nombre.
 * Se usa en la vista para aplicar búsqueda en tiempo real sobre el array de mascotas.
 */

import { Pipe, PipeTransform } from '@angular/core';
import { AdoptionEntity } from '../model/adoption.entity';

@Pipe({
  standalone: true,
  name: 'petNameFilter'
})
export class PetNameFilterPipe implements PipeTransform {
  /**
   * Filtra la lista de mascotas según el texto ingresado en el buscador.
   * Si no se proporciona un nombre, retorna la lista completa.
   *
   * @param pets - Lista de mascotas
   * @param name - Nombre o texto parcial para buscar
   * @returns Lista filtrada por nombre
   */
  transform(pets: AdoptionEntity[], name: string): AdoptionEntity[] {
    if (!name) return pets;
    return pets.filter(p =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
