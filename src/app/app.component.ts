import { Component } from '@angular/core';

import { Hero } from "./hero/hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  myHero: string;
  heroes: any;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      // new Hero(1, 'Windstorm', ),
      // new Hero(2, 'Bombasto'),
      // new Hero(3, 'Magneta'),
      // new Hero(4, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }

  addHero = (name) => {
    this.heroes.push({ id: this.heroes[this.heroes.length - 1].id + 1, name:name });
  }

}
