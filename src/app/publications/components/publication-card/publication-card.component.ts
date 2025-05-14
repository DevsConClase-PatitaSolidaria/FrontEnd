/*import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Publication } from '../../model/publication.entity';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent {
  @Input() publication: Publication;
  @Output() edit = new EventEmitter<Publication>();
  @Output() delete = new EventEmitter<number>();
  @Output() view = new EventEmitter<Publication>();

  onEdit(): void {
    this.edit.emit(this.publication);
  }

  onDelete(): void {
    if (this.publication.id) {
      this.delete.emit(this.publication.id);
    }
  }

  onView(): void {
    this.view.emit(this.publication);
  }
}
*/
