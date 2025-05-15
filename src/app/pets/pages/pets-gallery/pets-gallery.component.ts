import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet.entity';
import { PetsService } from '../../services/pets.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pets-gallery',
  standalone: true,
  templateUrl: './pets-gallery.component.html',
  styleUrls: ['./pets-gallery.component.css'],
  imports: [
    CommonModule,
    TranslateModule,
    PetCardComponent,
    FormsModule
  ]
})
export class PetsGalleryComponent implements OnInit {
  pets: Pet[] = [];
  isLoading = true;
  statusFilter: string = 'all'; // Cambiado de 'todos' a 'all' para consistencia

  constructor(private service: PetsService) {} // Nombre del servicio corregido

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.isLoading = true;
    this.service.getAll() // Cambiado de getAllPets() a getAll()
      .subscribe({
        next: (data) => {
          this.pets = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error loading pets:', err);
          this.isLoading = false;
        }
      });
  }

  get filteredPets(): Pet[] {
    if (this.statusFilter === 'all') {
      return this.pets;
    }
    return this.pets.filter(pet => pet.status === this.statusFilter);
  }
}
