import { Injectable } from '@angular/core';
import { Donation } from '../model/donation.entity';

@Injectable({
  providedIn: 'root',
})
export class DonationsService {
  private allDonations: Donation[] = [
    {
      id: '1',
      type: 'monetaria',
      title: 'Apoya con Yape/Plin',
      description: 'Puedes ayudar enviando una donación por Yape, Plin o CCI.',
      contactInfo: 'Yape: 987654321 - CCI: 002-123456789',
      imageUrl: 'https://via.placeholder.com/300x180'
    },
    {
      id: '2',
      type: 'especie',
      title: 'Donación de alimento seco',
      description: 'El refugio necesita alimento seco para perros.',
      contactInfo: 'Refugio Patitas - 987654321',
      location: 'Av. Los Álamos 789',
      imageUrl: 'https://via.placeholder.com/300x180'
    },
    {
      id: '3',
      type: 'monetaria',
      title: 'Mi campaña activa',
      description: 'Campaña publicada por el refugio logueado.',
      contactInfo: 'Mi Refugio - 900000000',
      imageUrl: 'https://via.placeholder.com/300x180'
    }
  ];

  getDonationsByRole(role: 'refugio' | 'adoptante' | 'rescatista'): Donation[] {
    if (role === 'refugio') {
      return this.allDonations.filter(d => d.id === '3');
    }
    return this.allDonations.filter(d => d.id !== '3');
  }
}
