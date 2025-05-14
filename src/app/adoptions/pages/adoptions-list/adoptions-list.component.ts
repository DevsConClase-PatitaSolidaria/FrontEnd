import { Component } from '@angular/core';
import {AdoptionFiltersComponent} from '../../components/adoption-filters/adoption-filters.component';
import {FormsModule} from '@angular/forms';
import {AdoptionCardComponent} from '../../components/adoption-card/adoption-card.component';

@Component({
  selector: 'app-adoptions-list',
  templateUrl: './adoptions-list.component.html',
  imports: [
    AdoptionFiltersComponent,
    FormsModule,
    AdoptionCardComponent
  ],
  styleUrls: ['./adoptions-list.component.css']
})
export class AdoptionsListComponent {
  search: string = '';
  sortOption: string = '';
  loading: boolean = false;
  pets: any[] = [];

  applyFilters(filters: any): void {
    console.log('Filtros aplicados:', filters);
    // lógica para aplicar filtros
  }

  applySort(): void {
    console.log('Opción de orden seleccionada:', this.sortOption);
    // lógica para ordenar this.pets
  }
}
