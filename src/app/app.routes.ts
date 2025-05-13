import { Routes } from '@angular/router';
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";

import { PetsGalleryComponent } from './pets/pages/pets-gallery/pets-gallery.component';
import { AdoptionsListComponent } from './adoptions/pages/adoptions-list/adoptions-list.component';
import { DonationOptionsComponent } from './donations/pages/donation-options/donation-options.component';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';
import { PublicationsDashboardComponent } from './publications/pages/publications-dashboard/publications-dashboard.component';
import { AdoptionManagementComponent } from './manage-adoptions/pages/adoption-management/adoption-management.component';

import { SignInComponent } from './iam/pages/sign-in/sign-in.component'; // Ruta de inicio de sesión
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component'; // Ruta de registro
import { authenticationGuard } from './iam/services/authentication.guard'; // Guard para proteger rutas

export const routes: Routes = [
  { path: '', component: PetsGalleryComponent },
  { path: 'pets', component: PetsGalleryComponent },
  /*
  { path: 'adoptions', component: AdoptionsListComponent, canActivate: [authenticationGuard] },
  { path: 'donations', component: DonationOptionsComponent, canActivate: [authenticationGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [authenticationGuard] },
  { path: 'publications', component: PublicationsDashboardComponent, canActivate: [authenticationGuard] },
  { path: 'manage-adoptions', component: AdoptionManagementComponent, canActivate: [authenticationGuard] },
*/
  { path: 'adoptions', component: AdoptionsListComponent},
  { path: 'donations', component: DonationOptionsComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'publications', component: PublicationsDashboardComponent},
  { path: 'manage-adoptions', component: AdoptionManagementComponent},

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  // Ruta para página no encontrada
  { path: '**', component: PageNotFoundComponent }
];
