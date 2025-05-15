import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet } from '../../model/pet.entity';
import { PetsService } from '../../services/pets.service';
import { TranslateModule } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
  ],
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent {
  @Input() pet!: Pet;
  @Output() adoptionConfirmed = new EventEmitter<number>();

  showModal = false;
  modalAnimation = '';
  showConfirmation = false;
  isProcessing = false;

  constructor(private service: PetsService) {}

  // Métodos de modal (sin cambios)
  openDetails(): void {
    console.log('Detalles abiertos para:', this.pet.name);
    console.log('showModal antes de abrir:', this.showModal); // Log antes de cambiar
    this.showModal = true;
    console.log('showModal después de abrir:', this.showModal); // Log después de cambiar
    this.modalAnimation = 'modal-enter';
  }

  closeDetails(): void {
    console.log("Cerrando modal");  // Verifica que se ejecuta
    this.modalAnimation = 'modal-exit';
    setTimeout(() => {
      this.showModal = false;
    }, 300);  // El modal se cierra después de la animación
  }

  // Métodos de adopción (corregidos)
  openAdoptionConfirmation(): void {
    this.showConfirmation = true;
    this.modalAnimation = 'modal-enter';
  }

  cancelAdoption(): void {
    this.modalAnimation = 'modal-exit';
    setTimeout(() => this.showConfirmation = false, 300);
  }

  confirmAdoption(): void {
    this.isProcessing = true;

    // CORRECCIÓN: Cambiado updatePetStatus → updateStatus
    this.service.updateStatus(this.pet.id, 'adopted')
      .pipe(
        finalize(() => this.isProcessing = false)
      )
      .subscribe({
        next: () => {
          this.pet.status = 'adopted';
          this.showConfirmation = false;
          this.adoptionConfirmed.emit(this.pet.id);
        },
        error: (err) => {
          console.error('Error en adopción:', err);
          // Manejo de errores mejorado (podrías usar un toast service)
        }
      });
  }

  getStatusBadgeClass(): string {
    return `status-badge ${this.pet.status}`;
  }
}
