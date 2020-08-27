import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';


@NgModule({
  declarations: [LandingPageComponent, LandingNavbarComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
  ],
  exports:[LandingNavbarComponent]
})
export class LandingPageModule { }
