import { Injectable } from '@angular/core';

@Injectable()

export class LoggerService {

  logs: string[] = [];
  info = (message) => {
    this.logs.push(message);
    console.log(message);
  }
}
