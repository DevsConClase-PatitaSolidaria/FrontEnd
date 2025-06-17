import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationFormComponent } from '../../components/publication-form/publication-form.component';
import { PublicationCardComponent } from '../../components/publication-card/publication-card.component';

@Component({
  selector: 'app-publications-dashboard',
  standalone: true,
  imports: [CommonModule, PublicationFormComponent, PublicationCardComponent],
  templateUrl: './publications-dashboard.component.html'
})
export class PublicationsDashboardComponent {
  publications: any[] = [];

  onAdd(pub: any) {
    this.publications.push({...pub, id: Math.random().toString()});
  }

  onDelete(id: string) {
    this.publications = this.publications.filter(pub => pub.id !== id);

  }
}
