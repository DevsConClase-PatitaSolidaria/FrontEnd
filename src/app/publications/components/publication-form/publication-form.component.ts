import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publication-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publication-form.component.html'
})
export class PublicationFormComponent {
  @Output() add = new EventEmitter<any>();

  form = {
    animalName: '',
    species: '',
    age: 0,
    description: '',
    shelter: ''
  };

  onSubmit() {
    this.add.emit({ ...this.form });
    this.form = { animalName: '', species: '', age: 0, description: '', shelter: '' };
  }
}
