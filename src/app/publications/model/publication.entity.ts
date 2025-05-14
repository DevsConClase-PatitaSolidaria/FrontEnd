export interface Publication {
  id?: number;
  title: string;
  description: string;
  animalType: string;
  breed?: string;
  age?: number;
  gender: 'male' | 'female' | 'unknown';
  size: 'small' | 'medium' | 'large' | 'extra-large';
  healthStatus: string;
  imageUrl?: string;
  rescuerId: number;
  rescuerName?: string;
  location?: string;
  contactPhone?: string;
  contactEmail?: string;
  status: 'available' | 'adopted' | 'in_process';
  createdAt: Date;
  updatedAt?: Date;
}
