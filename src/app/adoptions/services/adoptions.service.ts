/**
 * Autor: @leccapedro
 * Descripción: Servicio encargado de obtener los datos de mascotas desde un archivo JSON local.
 * Simula una fuente de datos externa mediante peticiones HTTP.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdoptionEntity } from '../model/adoption.entity';

@Injectable({
  providedIn: 'root'
})
export class AdoptionsService {
  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista completa de mascotas desde un archivo local JSON.
   */
  getAllPets(): Observable<AdoptionEntity[]> {
    return this.http.get<AdoptionEntity[]>('assets/data/pets.json');
  }
}
