import { StartingPageModule } from './../starting-page/starting-page.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
    StartingPageModule
  ]
})
export class ErrorPagesModule { }
