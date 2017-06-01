import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then((heroes: Hero[]) => { this.heroes = heroes.splice(0, 4); });
  }
}
