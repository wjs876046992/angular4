import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { LoggerService } from '../log/logger.service';

@Injectable()
export class HeroService {

  heroes: Hero[];
  constructor(private logger: LoggerService) {
    this.heroes = HEROES;
  }

  getHeroes = () => {
    this.logger.info('Getting heroes...');
    return Promise.resolve(this.heroes);
  }
}
