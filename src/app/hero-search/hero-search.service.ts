import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../hero/hero';
import { appConfig } from '../app-config';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search = (term: string): Observable<Hero[]> => {
    return this.http.get(`${appConfig.baseUrl}/heroes`, { params: { name: term } }).map(response => response.json().data as Hero[]);
  }
}
