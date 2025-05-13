/**
 * Autor: @leccapedro
 * Descripción: Componente encargado de representar una tarjeta visual
 * con la información de una mascota en adopción. Recibe un objeto `pet`
 * del tipo `AdoptionEntity` como entrada.
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdoptionEntity } from '../../model/adoption.entity';

@Component({
  standalone: true,
  selector: 'app-adoption-card',
  templateUrl: './adoption-card.component.html',
  styleUrls: ['./adoption-card.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AdoptionCardComponent {
  /**
   * Recibe los datos de una mascota a mostrar en la tarjeta.
   */
  @Input() pet!: AdoptionEntity;
}
