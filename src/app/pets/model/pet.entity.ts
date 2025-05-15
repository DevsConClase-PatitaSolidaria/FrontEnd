// pet.entity.ts (o el archivo donde defines la clase Pet)
export class Pet {
  id: number;
  name: string;
  age: number;
  photo: string;
  breed: string;
  size: string;
  status: string;
  description: string;
  healthStatus: string;
  vaccinationStatus: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.photo = data.photo;
    this.breed = data.breed;
    this.size = data.size;
    this.status = data.status;
    this.description = data.description;
    this.healthStatus = data.healthStatus;
    this.vaccinationStatus = data.vaccinationStatus;
  }
}
