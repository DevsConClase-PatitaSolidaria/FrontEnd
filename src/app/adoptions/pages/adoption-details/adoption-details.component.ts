/**
 * Autor: @leccapedro
 * Descripción: Componente que muestra la información detallada de una mascota según su ID.
 * Utiliza rutas dinámicas y obtiene los datos desde el archivo pets.json a través del servicio.
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AdoptionEntity } from '../../model/adoption.entity';
import { AdoptionsService } from '../../services/adoptions.service';

@Component({
  standalone: true,
  selector: 'app-adoption-details',
  templateUrl: './adoption-details.component.html',
  styleUrls: ['./adoption-details.component.css'],
  imports: [CommonModule, RouterModule, TranslateModule]
})

export class AdoptionDetailsComponent implements OnInit {
  pet!: AdoptionEntity | undefined;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private adoptionsService: AdoptionsService
  ) {}

  ngOnInit(): void {
    // Obtener ID desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Cargar todas las mascotas y buscar la que coincide
    this.adoptionsService.getAllPets().subscribe({
      next: (data) => {
        this.pet = data.find(p => p.id === id);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener la mascota:', err);
        this.loading = false;
      }
    });
  }
}
