import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [LoggerService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
