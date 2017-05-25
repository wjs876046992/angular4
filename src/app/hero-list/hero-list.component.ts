import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less'],
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  getHeroes = () => {
    this.heroService.getHeroes().then((heroes: Hero[]) => { this.heroes = heroes; });
  }

  ngOnInit():void {
    this.getHeroes();
  }

  addHero = (name) => {
    this.heroes.push(new Hero(99, '', ''));
  }

  selectHero = (hero) => {
    this.selectedHero = hero;
  }

  gotoDetail = () => {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
