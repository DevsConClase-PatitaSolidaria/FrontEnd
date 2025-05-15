/**
 * Autor: @leccapedro
 * Descripción: Componente de filtros laterales para el listado de mascotas en adopción.
 * Permite aplicar múltiples filtros colapsables por atributos (edad, tamaño, pelo, etc.)
 * y emite los filtros activos al componente padre.
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AdoptionFilter } from '../../model/adoption-filter.model';

@Component({
  standalone: true,
  selector: 'app-adoption-filters',
  templateUrl: './adoption-filters.component.html',
  styleUrls: ['./adoption-filters.component.css'],
  imports: [CommonModule, TranslateModule]
})

export class AdoptionFiltersComponent {
  @Output() filtersChanged = new EventEmitter<AdoptionFilter>();

  expanded = {
    activity: false,
    weight: false,
    size: false,
    hair: false,
    gender: false,
    age: false
  };

  filter: AdoptionFilter = {
    gender: '',
    age: '',
    size: '',
    hair: '',
    activity: '',
    weight: ''
  };

  toggle(section: keyof typeof this.expanded): void {
    this.expanded[section] = !this.expanded[section];
  }

  updateFilter(property: keyof AdoptionFilter, value: string): void {
    this.filter[property] = value;
    this.filtersChanged.emit({ ...this.filter });
  }

  clearFilters(): void {
    this.filter = {};
    this.filtersChanged.emit({});
    Object.keys(this.expanded).forEach(
      key => this.expanded[key as keyof typeof this.expanded] = false
    );
  }
}
