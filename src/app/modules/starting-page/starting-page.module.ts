import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LandingNavbarComponent } from './../starting-page/landing-navbar/landing-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartingPageRoutingModule } from './starting-page-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [LandingNavbarComponent, LoginComponent, RegisterComponent, LandingPageComponent],
  imports: [
    CommonModule,
    StartingPageRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  exports: [
    LandingNavbarComponent
  ]
})
export class StartingPageModule { }
