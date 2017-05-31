import { Component } from '@angular/core';

import { Heroes } from '../hero.service';

@Component({
  selector: 'app-hero-team-builder',
  templateUrl: './hero-team-builder.component.html',
  styleUrls: ['./hero-team-builder.component.less'],
  providers: [Heroes]
})
export class HeroTeamBuilderComponent {
  constructor(private heroes: Heroes) { }
}
