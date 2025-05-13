import { Injectable } from '@angular/core';
import { User } from '../model/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  getUsers(): User[] {
    return [

      {
        id: 1,
        name: 'María "La Catlady" López',
        email: "maria.catlady@example.com",
        address: "Av. Arequipa 1230, Lince",
        role: "rescatista",
        paymentMethods: ["Yape", "Plin", "Efectivo"],
        preferences: [
          "Gatos callejeros",
          "Gatos enfermos",
          "Gatos ancianos",
          "Rescates urgentes",
          "Donaciones de whiskas"
        ],
        profilePic: "https://example.com/rescatista-lima1.jpg",
        bio: "Rescatista de gatos hace 8 años. Especialista en casos difíciles."
      },
      {
        id: 2,
        name: "Carlos 'El Perrero' Mendoza",
        email: "carlos.perrero@example.com",
        address: "Jr. Huancavelica 456, Breña",
        role: "rescatista",
        paymentMethods: ["Efectivo", "Transferencia BCP"],
        preferences: [
          "Perros abandonados",
          "Perros en carreteras",
          "Casos de maltrato animal",
          "Emergencias veterinarias",
          "Donaciones de concentrado"
        ],
        profilePic: "https://example.com/rescatista-lima2.jpg",
        bio: "El que rescata perritos desde la época del Chino Chávez"
      },
      {
        id: 3,
        name: "Hermana Patitas",
        email: "hermana.patitas@example.com",
        address: "Av. Brasil 789, Lima Cercado",
        role: "rescatista",
        paymentMethods: ["Donaciones por MercadoPago"],
        preferences: [
          "Animales discapacitados",
          "Casos extremos",
          "Animales quemados",
          "Donaciones para cirugías",
          "Voluntarios comprometidos"
        ],
        profilePic: "https://example.com/rescatista-lima3.jpg",
        bio: "Religiosa dedicada al rescate animal hace 15 años"
      },


      {
        id: 4,
        name: "Refugio 'El Paraíso Peludo'",
        email: "paraiso.peludo@example.com",
        address: "Av. La Molina 2345, La Molina",
        role: "refugio",
        paymentMethods: ["Transferencia", "Efectivo", "Tarjeta"],
        preferences: [
          "Adopciones responsables",
          "Donaciones de alimento",
          "Padrinos para animales",
          "Voluntarios los fines de semana",
          "Donaciones para esterilizaciones"
        ],

        profilePic: "https://example.com/refugio-lima1.jpg",
        bio: "El refugio más grande de Lima con más de 200 animales rescatados",
        capacity: 200,
        animalsAvailable: 45
      },
      {
        id: 5,
        name: "Hogar Temporal 'Miski Wasi'",
        email: "miski.wasi@example.com",
        address: "Calle Los Pinos 678, Surco",
        role: "refugio",
        paymentMethods: ["Depósito bancario BBVA"],
        preferences: [
          "Familias adoptivas",
          "Voluntarios para paseos",
          "Donaciones de medicinas",
          "Transporte para animales",
          "Veterinarios voluntarios"
        ],

        profilePic: "https://example.com/refugio-lima2.jpg",
        bio: "Especializados en rehabilitación conductual",
        capacity: 50,
        animalsAvailable: 18
      },
      {
        id: 6,
        name: "Santuario 'Los Angelitos'",
        email: "angelitos.santuario@example.com",
        address: "Km 25 Panamericana Norte, Carabayllo",
        role: "refugio",
        paymentMethods: ["Donaciones por PayPal"],
        preferences: [
          "Animales terminales",
          "Casos especiales",
          "Donaciones para cuidados paliativos",
          "Voluntarios permanentes",
          "Apoyo para medicinas especializadas"
        ],

        profilePic: "https://example.com/refugio-lima3.jpg",
        bio: "Damos amor en los últimos días de los angelitos",
        capacity: 80,
        animalsAvailable: 32
      },


      {
        id: 7,
        name: "Familia García-Pacheco",
        email: "garcia.pacheco@example.com",
        address: "Av. Salaverry 345, Jesús María",
        role: "adoptante",
        paymentMethods: ["Efectivo", "Yape"],
        preferences: [
          "Perro mediano",
          "Adulto (3-7 años)",
          "Que le gusten los niños",
          "Que pueda vivir en departamento",
          "Que no ladre mucho (vecinos quisquillosos)"
        ],
        profilePic: "https://example.com/adoptante-lima1.jpg",
        bio: "Familia con 2 niños pequeños buscando primer mascota",
        homeType: "Dpto. de 120m2 sin patio",
        previousExperience: "Ninguna, pero mucha ilusión"
      },
      {
        id: 8,
        name: "Roberto 'El Gato' Sánchez",
        email: "roberto.gato@example.com",
        address: "Calle Schell 12, Miraflores",
        role: "adoptante",
        paymentMethods: ["Plin", "Efectivo"],
        preferences: [
          "Gato adulto",
          "De preferencia negro (por la suerte)",
          "Que use arenero",
          "Tranquilo (soy home office)",
          "Que le guste dormir en el teclado"
        ],
        profilePic: "https://example.com/adoptante-lima2.jpg",
        bio: "Programador buscando compañero de desvelos",
        homeType: "Dpto. pequeño con muchos estantes",
        previousExperience: "Tuve 3 gatos en provincia"
      },
      {
        id: 9,
        name: "Las Chicas Superpoderosas",
        email: "chicas.superpoderosas@example.com",
        address: "Av. Petit Thouars 567, San Isidro",
        role: "adoptante",
        paymentMethods: ["Transferencia Interbank"],
        preferences: [
          "Perro pequeño",
          "Que pueda viajar en auto",
          "Que le guste ir a la playa los fines de semana",
          "Que se lleve bien con otras perritas",
          "De preferencia rescatado"
        ],
        profilePic: "https://example.com/adoptante-lima3.jpg",
        bio: "Tres amigas compartiendo departamento buscando compañero canino",
        homeType: "Penthouse con terraza",
        previousExperience: "Mucha con perros de familiares"
      },
      {
        id: 10,
        name: "Doña Rosita",
        email: "dona.rosita@example.com",
        address: "Jr. Carabaya 89, Cercado de Lima",
        role: "adoptante",
        paymentMethods: ["Efectivo"],
        preferences: [
          "Gato anciano",
          "De preferencia con alguna condición especial",
          "Que le guste dormir mucho",
          "Que no sea muy activo",
          "Que le guste el atún"
        ],
        profilePic: "https://example.com/adoptante-lima4.jpg",
        bio: "Jubilada buscando compañero tranquilo para sus tardes",
        homeType: "Casa antigua con patio interior",
        previousExperience: "He tenido gatos toda mi vida"
      }
    ];
  }
}
