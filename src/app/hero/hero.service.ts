import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { LoggerService } from '../log/logger.service';

@Injectable()
export class HeroService {

  heroes: Hero[];
  private heroUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private logger: LoggerService, private http: Http) {
    this.heroes = HEROES;
  }

  getHeroes = (): Promise<Hero[]> => {
    this.logger.info('Getting heroes...');
    return this.http.get(this.heroUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
  }

  getHero = (id: number): Promise<Hero> => {
    // const url = `${this.heroUrl}/${id}`;
    const url = `${this.heroUrl}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
  }

  updateHero = (hero: Hero): Promise<Hero> => {
    const url = `${this.heroUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers }).toPromise().then(() => hero).catch(this.handleError);
  }

  createHero = (hero: Hero): Promise<Hero> => {
    return this.http.post(this.heroUrl, JSON.stringify(hero), { headers: this.headers }).toPromise().then((response) => response.json().data as Hero).catch(this.handleError);
  }

  handleError = (error: any) => {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
