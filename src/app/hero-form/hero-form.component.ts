import { Component } from '@angular/core';

import { Hero } from '../hero/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {

  powers = [ 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer' ];
  hero = new Hero(12, 'Herman', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit = () => {
    this.submitted = true;
  }

  newHero = () => {
    this.hero = new Hero(13, '', '');
  }
}
