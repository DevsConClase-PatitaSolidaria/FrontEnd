import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publication } from '../../model/publication.entity';

@Component({
  selector: 'app-publication-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publication-card.component.html'
})
export class PublicationCardComponent {
  @Input() publication!: Publication;
  @Output() delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.publication.id);
  }
}

