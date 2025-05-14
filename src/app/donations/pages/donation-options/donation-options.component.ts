import { Component, OnInit } from '@angular/core';
import { Donation } from '../../model/donation.entity';
import { DonationsService } from '../../services/donations.service';
import { CommonModule } from '@angular/common';
import { DonationCardComponent } from '../../components/donation-card/donation-card.component';

type UserRole = 'refugio' | 'adoptante' | 'rescatista';

@Component({
  selector: 'app-donation-options',
  standalone: true,
  imports: [CommonModule, DonationCardComponent],
  templateUrl: './donation-options.component.html',
  styleUrls: ['./donation-options.component.css']
})
export class DonationOptionsComponent implements OnInit {
  donations: Donation[] = [];
  userRole: UserRole = 'adoptante';
  selectedType: 'monetaria' | 'especie' | null = null;

  constructor(private donationService: DonationsService) {}

  ngOnInit(): void {
    this.donations = this.donationService.getDonationsByRole(this.userRole);
    console.log('ROL:', this.userRole);
    console.log('DONACIONES:', this.donations);
  }

  get filteredDonations(): Donation[] {
    if (this.userRole === 'refugio') {
      return this.donations;
    }
    if (!this.selectedType) return [];
    return this.donations.filter(d => d.type === this.selectedType);
  }

  resetSelection(): void {
    this.selectedType = null;
  }

}


