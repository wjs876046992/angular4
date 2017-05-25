import { Component } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls:['./hero-list.component.css'],
  providers: [HeroService]
})

export class HeroListComponent {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().then((heroes: Hero[]) => { this.heroes = heroes; });
  }

  addHero = (name) => {
    this.heroes.push(new Hero(99, '', ''));
  }

  selectHero = (hero) => {
    this.selectedHero = hero;
  }
}
