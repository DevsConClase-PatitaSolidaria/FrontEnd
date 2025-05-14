import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionRequest } from '../../model/adoption-request.entity';
import { ManageAdoptionsService } from '../../services/manage-adoptions.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-adoption-detail',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './adoption-detail.component.html',
  styleUrls: ['./adoption-detail.component.css']
})
export class AdoptionDetailComponent {
  @Input() request!: AdoptionRequest;
  showModal = false;
  modalAnimation = '';

  constructor(private service: ManageAdoptionsService) {}

  confirmAction: 'aceptar' | 'rechazar' | null = null;
  showConfirmation = false;

  openConfirmation(action: 'aceptar' | 'rechazar') {
    this.confirmAction = action;
    this.showConfirmation = true;
    this.modalAnimation = 'modal-enter';
  }

  closeConfirmation() {
    this.modalAnimation = 'modal-exit';
    setTimeout(() => {
      this.showConfirmation = false;
      this.confirmAction = null;
    }, 300);
  }

  confirmStatusChange() {
    if (this.confirmAction) {
      this.request.status = this.confirmAction === 'aceptar' ? 'aceptada' : 'rechazada';
      this.closeConfirmation();
    }
  }

  openDetails() {
    this.showModal = true;
    this.modalAnimation = 'modal-enter';
  }

  closeDetails() {
    this.modalAnimation = 'modal-exit';
    setTimeout(() => {
      this.showModal = false;
    }, 300);
  }
}


