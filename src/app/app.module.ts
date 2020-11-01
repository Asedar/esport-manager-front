import { ErrorPagesModule } from './modules/error-pages/error-pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { StartingPageModule } from './modules/starting-page/starting-page.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from './modules/interceptors/auth.interceptor';
import { NavbarModule } from './modules/navbar/navbar.module';
import { RandomizerModule } from './modules/randomizer/randomizer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    StartingPageModule,
    NavbarModule,
    RandomizerModule,
    BrowserAnimationsModule,
    ErrorPagesModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
