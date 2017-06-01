import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent implements OnInit {

  powers = [ 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer', 'Fly' ];
  hero: Hero = new Hero(null, '', '', '');

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        this.heroService.getHero(+params['id']).then((hero: Hero) => {
          this.hero = hero;
        });
      }
    });
  }

  onSubmit = () => {
    console.log(this.hero);
    if (this.hero.id) {
      this.heroService.updateHero(this.hero).then(() => this.location.back());
    } else {
      this.heroService.createHero(this.hero).then(() => this.location.back());
    }
  }

}
