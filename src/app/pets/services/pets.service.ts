import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet.entity';

@Injectable({
  providedIn: 'root'
})
export class PetsService {  // <-- Mejor nombre en plural (coherencia con estándares)
  private apiUrl = 'http://localhost:3000/pets';  // Ajusta según tu API real

  constructor(private http: HttpClient) {}

  // Obtener todas las mascotas (con opción de filtrar por estado)
  getAll(status?: Pet['status']): Observable<Pet[]> {
    const url = status ? `${this.apiUrl}?status=${status}` : this.apiUrl;
    return this.http.get<Pet[]>(url);
  }

  // Actualizar estado de una mascota
  updateStatus(id: number, status: 'available' | 'adopted' | 'pending'): Observable<Pet> {
    return this.http.patch<Pet>(`${this.apiUrl}/${id}`, { status });  // <-- Tipado de respuesta
  }

  // Obtener una mascota por ID (útil para detalles)
  getById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}/${id}`);
  }

  // Crear nueva mascota (si tu app lo requiere)
  create(pet: Omit<Pet, 'id'>): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  // Eliminar mascota (opcional)
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // pets.service.ts
  getPetDetails(petId: number) {
    return this.http.get<Pet>(`/api/pets/${petId}`);
  }
}
