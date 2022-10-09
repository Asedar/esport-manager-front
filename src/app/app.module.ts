import { ErrorPagesModule } from './modules/error-pages/error-pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartingPageModule } from './modules/starting-page/starting-page.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarModule } from './modules/navbar/navbar.module';
import { RandomizerModule } from './modules/randomizer/randomizer.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TournamentModule } from './modules/tournament/tournament.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartingPageModule,
    NavbarModule,
    RandomizerModule,
    TeamsModule,
    TournamentModule,
    AccountModule,
    BrowserAnimationsModule,
    ErrorPagesModule,
    HttpClientModule,
    NgxSpinnerModule,
    
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
