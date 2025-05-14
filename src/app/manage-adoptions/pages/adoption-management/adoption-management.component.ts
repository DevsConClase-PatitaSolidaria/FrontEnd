import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionRequest } from '../../model/adoption-request.entity';
import { ManageAdoptionsService } from '../../services/manage-adoptions.service';
import { TranslateModule } from '@ngx-translate/core';
import { AdoptionDetailComponent } from '../../components/adoption-detail/adoption-detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adoption-management',
  standalone: true,
  imports: [CommonModule, AdoptionDetailComponent, TranslateModule, FormsModule],
  templateUrl: './adoption-management.component.html',
  styleUrls: ['./adoption-management.component.css']
})
export class AdoptionManagementComponent implements OnInit {
  requests: AdoptionRequest[] = [];
  isLoading = true;

  statusFilter: string = 'todos';

  constructor(private service: ManageAdoptionsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.service.getAll().subscribe({
      next: data => {
        console.log('Requests from API', data);
        this.requests = data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Error cargando solicitudes', err);
        this.isLoading = false;
      }
    });
  }

  get filteredRequests(): AdoptionRequest[] {
    return this.statusFilter === 'todos'
      ? this.requests
      : this.requests.filter(r => r.status === this.statusFilter);
  }
}
