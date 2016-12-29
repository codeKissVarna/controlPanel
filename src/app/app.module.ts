import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/app-home.component';
import { ProfileComponent } from './components/profile/app-profile.component';

import { Auth } from './services/auth.sersive';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    Auth,
    AUTH_PROVIDERS,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
