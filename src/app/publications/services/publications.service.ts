import { Publication } from '../model/publication.entity';

export class PublicationsService {
  private publications: Publication[] = [];

  getAll(): Publication[] {
    return [...this.publications];
  }

  add(publication: Omit<Publication, 'id'>): void {
    const newPublication: Publication = {
      ...publication,
      id: Math.random().toString(36).substr(2, 9),
    };
    this.publications.push(newPublication);
  }

  remove(id: string): void {
    this.publications = this.publications.filter(pub => pub.id !== id);
  }
}
