export interface AdoptionRequest {
  id: number;
  petName: string;
  petAge: number;
  petPhoto: string;

  adopterName: string;
  adopterAge: number;
  adopterPhoto: string;
  reason: string;

  status: 'pendiente' | 'aceptada' | 'rechazada';

  // Datos detallados para el modal
  birthDate: string;
  email: string;
  dni: string;
  location: string;
  maritalStatus: string;
  hasChildren: boolean;
  livesWithParents: boolean;
  economicStatus: string;
  phone: string;
  petExperience: string;
}

