import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './event/click-me/click-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero/hero.service';
import { KeyupComponent } from './event/keyup/keyup.component';
import { LoggerService } from './log/logger.service';
import { HeroListBasicComponent } from './hero-list-animations/hero-list-basic/hero-list-basic.component';
import { HeroTeamBuilderComponent } from './hero-list-animations/hero-team-builder/hero-team-builder.component';


import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    DashboardComponent,
    EventComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroFormComponent,
    HeroListComponent,
    HeroSearchComponent,
    KeyupComponent,
    HeroListBasicComponent,
    HeroTeamBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgBootstrapModule
  ],
  providers: [LoggerService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
