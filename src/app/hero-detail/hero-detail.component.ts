import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params): any => {
        if (params['id']) {
          this.heroService.getHero(+params['id'])
            .then((hero: Hero) => this.hero = hero );
        } else {
          this.hero = new Hero(null, '', '', null);
        }
      }
    );
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack = (): void => {
    this.location.back();
  }

  update = (): void => {
    this.heroService.updateHero(this.hero).then(() => this.goBack);
  }
}
