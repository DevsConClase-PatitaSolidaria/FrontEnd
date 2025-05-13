export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  role: 'rescatista' | 'refugio' | 'adoptante';
  paymentMethods?: string[];
  preferences: string[];
  profilePic?: string;
  bio?: string;

  capacity?: number;
  animalsAvailable?: number;
  homeType?: string;
  previousExperience?: string;
  specialty?: string;
  experienceYears?: number;
}
