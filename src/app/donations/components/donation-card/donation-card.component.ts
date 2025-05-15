import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Donation } from '../../model/donation.entity';

@Component({
  selector: 'app-donation-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './donation-card.component.html',
  styleUrls: ['./donation-card.component.css']
})
export class DonationCardComponent {
  @Input() donation!: Donation;
  @Input() userRole: 'refugio' | 'adoptante' | 'rescatista' = 'adoptante';

  showForm: boolean = false;
}
