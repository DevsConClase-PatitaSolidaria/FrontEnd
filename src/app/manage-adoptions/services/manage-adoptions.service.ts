import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdoptionRequest } from '../model/adoption-request.entity';

@Injectable({
  providedIn: 'root'
})
export class ManageAdoptionsService {
  private apiUrl = 'http://localhost:3000/adoptionRequests';

  constructor(private http: HttpClient) {}

  getAll(): Observable<AdoptionRequest[]> {
    return this.http.get<AdoptionRequest[]>(this.apiUrl);
  }

  updateStatus(id: number, status: 'aceptada' | 'rechazada'): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { status });
  }
}
