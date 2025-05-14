/*import { Component, OnInit } from '@angular/core';
import { Publication } from '../../model/publication.entity';
import { PublicationsService } from '../../services/publications.service';

@Component({
  selector: 'app-publications-dashboard',
  templateUrl: './publications-dashboard.component.html',
  styleUrls: ['./publications-dashboard.component.scss']
})
export class PublicationsDashboardComponent implements OnInit {
  publications: Publication[] = [];
  selectedPublication: Publication | null = null;
  isFormVisible = false;

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    this.loadPublications();
  }

  loadPublications(): void {
    this.publicationsService.getAllPublications().subscribe({
      next: (data) => {
        this.publications = data;
      },
      error: (err) => {
        console.error('Error fetching publications', err);
      }
    });
  }

  onAddNew(): void {
    this.selectedPublication = null;
    this.isFormVisible = true;
  }

  onEditPublication(publication: Publication): void {
    this.selectedPublication = publication;
    this.isFormVisible = true;
  }

  onDeletePublication(id: number): void {
    this.publicationsService.deletePublication(id).subscribe({
      next: () => {
        this.publications = this.publications.filter(p => p.id !== id);
      },
      error: (err) => {
        console.error('Error deleting publication', err);
      }
    });
  }

  onFormSubmit(publication: Publication): void {
    if (publication.id) {
      // Update existing
      this.publicationsService.updatePublication(publication.id, publication).subscribe({
        next: (updated) => {
          const index = this.publications.findIndex(p => p.id === publication.id);
          if (index !== -1) {
            this.publications[index] = updated;
          }
          this.isFormVisible = false;
        },
        error: (err) => {
          console.error('Error updating publication', err);
        }
      });
    } else {
      // Create new
      this.publicationsService.createPublication(publication).subscribe({
        next: (created) => {
          this.publications.push(created);
          this.isFormVisible = false;
        },
        error: (err) => {
          console.error('Error creating publication', err);
        }
      });
    }
  }

  closeForm(): void {
    this.isFormVisible = false;
  }
}
*/
