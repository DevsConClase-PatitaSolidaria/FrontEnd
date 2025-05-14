import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationCardComponent } from './components/donation-card/donation-card.component';
import { DonationOptionsComponent } from './pages/donation-options/donation-options.component';

@NgModule({
  imports: [
    CommonModule,
    DonationCardComponent,
    DonationOptionsComponent
  ],
  exports: [
    DonationOptionsComponent
  ]
})
export class DonationsModule { }


