import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IdleService } from './shared/services/idle/idle.service';
import { MinuteSecondsPipe } from './shared/pipes/minute-seconds.pipe';
import { SessionService } from './shared/services/session/session.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MinuteSecondsPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    IdleService,
    SessionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
