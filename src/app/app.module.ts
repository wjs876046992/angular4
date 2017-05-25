import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './event/click-me/click-me.component';
import { EventComponent } from './event/event.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { KeyupComponent } from './event/keyup/keyup.component';
import { LoggerService } from './log/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    EventComponent,
    HeroDetailComponent,
    HeroFormComponent,
    HeroListComponent,
    KeyupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
