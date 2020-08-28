import { ErrorPagesModule } from './modules/error-pages/error-pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { StartingPageModule } from './modules/starting-page/starting-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    StartingPageModule,
    BrowserAnimationsModule,
    ErrorPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
