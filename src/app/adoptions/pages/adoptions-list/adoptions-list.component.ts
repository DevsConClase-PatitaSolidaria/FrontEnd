/**
 * Autor: @leccapedro
 * Descripción: Componente principal que muestra la lista de mascotas disponibles para adopción.
 * Integra los filtros, la búsqueda por nombre y el ordenamiento dinámico.
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdoptionsService } from '../../services/adoptions.service';
import { AdoptionEntity } from '../../model/adoption.entity';
import { AdoptionFilter } from '../../model/adoption-filter.model';
import { AdoptionCardComponent } from '../../components/adoption-card/adoption-card.component';
import { AdoptionFiltersComponent } from '../../components/adoption-filters/adoption-filters.component';
import { PetNameFilterPipe } from '../../pipes/pet-name-filter.pipe';

@Component({
  standalone: true,
  selector: 'app-adoptions-list',
  templateUrl: './adoptions-list.component.html',
  styleUrls: ['./adoptions-list.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    AdoptionCardComponent,
    AdoptionFiltersComponent,
    PetNameFilterPipe
  ]
})
export class AdoptionsListComponent implements OnInit {
  pets: AdoptionEntity[] = [];         // Lista filtrada de mascotas a mostrar
  petsOriginal: AdoptionEntity[] = []; // Lista completa original (sin filtros)
  loading = true;                      // Control de carga inicial
  search: string = '';                 // Búsqueda por nombre
  sortOption: string = '';             // Criterio de ordenamiento seleccionado

  constructor(private adoptionsService: AdoptionsService) {}

  ngOnInit(): void {
    // Carga inicial de mascotas desde el servicio
    this.adoptionsService.getAllPets().subscribe({
      next: (data) => {
        this.petsOriginal = data;
        this.pets = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar mascotas:', err);
        this.loading = false;
      }
    });
  }

  /**
   * Convierte un valor numérico de edad en una categoría textual.
   */
  getAgeCategory(age: number): string {
    if (age < 1) return 'Cachorro';
    if (age < 7) return 'Adulto';
    return 'Mayor';
  }

  /**
   * Aplica los filtros seleccionados por el usuario sobre la lista original.
   */
  applyFilters(filter: AdoptionFilter): void {
    this.pets = this.petsOriginal.filter(pet =>
      (!filter.gender || pet.gender === filter.gender) &&
      (!filter.age || this.getAgeCategory(pet.age) === filter.age) &&
      (!filter.size || pet.size === filter.size) &&
      (!filter.hair || pet.hair === filter.hair) &&
      (!filter.activity || pet.activity === filter.activity) &&
      (!filter.weight || pet.weight === filter.weight)
    );

    this.applySort(); // Aplica ordenamiento luego del filtrado
  }

  /**
   * Ordena la lista actual de mascotas según el criterio seleccionado.
   */
  applySort(): void {
    if (!this.sortOption) return;

    this.pets.sort((a, b) => {
      switch (this.sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'age-asc':
          return a.age - b.age;
        case 'age-desc':
          return b.age - a.age;
        default:
          return 0;
      }
    });
  }
}
