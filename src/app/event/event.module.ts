import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventComponent } from './event.component';
import { ClickMeComponent } from './click-me/click-me.component';

@NgModule({
  declarations: [
    EventComponent,
    ClickMeComponent
  ]
})

export class EventModule { }
