/**
 * Autor: @leccapedro
 * Descripción: Componente de filtros laterales para el listado de mascotas en adopción.
 * Permite aplicar múltiples filtros colapsables por atributos (edad, tamaño, pelo, etc.)
 * y emite los filtros activos al componente padre.
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionFilter } from '../../model/adoption-filter.model';

@Component({
  standalone: true,
  selector: 'app-adoption-filters',
  templateUrl: './adoption-filters.component.html',
  styleUrls: ['./adoption-filters.component.css'],
  imports: [CommonModule]
})
export class AdoptionFiltersComponent {
  /**
   * Emisor de evento para enviar los filtros actualizados al componente padre.
   */
  @Output() filtersChanged = new EventEmitter<AdoptionFilter>();

  /**
   * Controla qué secciones de filtros están expandidas (visibles).
   */
  expanded = {
    activity: false,
    weight: false,
    size: false,
    hair: false,
    gender: false,
    age: false
  };

  /**
   * Objeto que contiene los filtros seleccionados actualmente.
   */
  filter: AdoptionFilter = {
    gender: '',
    age: '',
    size: '',
    hair: '',
    activity: '',
    weight: ''
  };

  /**
   * Alterna la visibilidad de una sección de filtro.
   * @param section - nombre de la sección a expandir o contraer
   */
  toggle(section: keyof typeof this.expanded): void {
    this.expanded[section] = !this.expanded[section];
  }

  /**
   * Actualiza un filtro específico y emite el conjunto actualizado.
   * @param property - propiedad del filtro a actualizar
   * @param value - nuevo valor a aplicar
   */
  updateFilter(property: keyof AdoptionFilter, value: string): void {
    this.filter[property] = value;
    this.filtersChanged.emit({ ...this.filter });
  }

  /**
   * Limpia todos los filtros activos y colapsa todas las secciones.
   */
  clearFilters(): void {
    this.filter = {};
    this.filtersChanged.emit({});
    Object.keys(this.expanded).forEach(
      key => this.expanded[key as keyof typeof this.expanded] = false
    );
  }
}
