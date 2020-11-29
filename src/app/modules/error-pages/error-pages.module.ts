import { StartingPageModule } from './../starting-page/starting-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
    StartingPageModule,
    NavbarModule
  ]
})
export class ErrorPagesModule { }
