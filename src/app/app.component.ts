import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import { AuthenticationSectionComponent } from './iam/components/authentication-section/authentication-section.component';
import { AuthenticationService } from './iam/services/authentication.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    LanguageSwitcherComponent,
    CommonModule,
    AuthenticationSectionComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PatitaSolidaria';
  isSignedIn: boolean = false;

  @ViewChild(MatSidenav, { static: true }) sidenav!: MatSidenav;

  mainOptions = [
    { path: '/authentication', title: 'Autenticación' },
  ];

  secondaryOptions = [
    { icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png', path: '/pets', title: 'Mascotas' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/5308/5308557.png', path: '/adoptions', title: 'Adopciones' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/11008/11008379.png', path: '/donations', title: 'Donaciones' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png', path: '/profile', title: 'Perfil' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/2680/2680900.png', path: '/publications', title: 'Publicaciones' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/3842/3842536.png', path: '/manage-adoptions', title: 'Gestión de Adopciones' },
  ];

  constructor(
    private translate: TranslateService,
    private observer: BreakpointObserver,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    // Verifica el usuario autenticado
    this.authenticationService.isSignedIn.subscribe(
      (isSignedIn) => {
        this.isSignedIn = isSignedIn;
        // Si el usuario no está autenticado, redirigimos a la página de inicio de sesión
        if (!isSignedIn) {
          this.router.navigate(['/sign-in']);
        }
      }
    );

    // Configuración de la vista de Sidenav dependiendo del tamaño de la pantalla
    this.observer.observe(['(max-width: 1280px)']).subscribe((response) => {
      if (response.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
