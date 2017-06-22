import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-alert',
  template: `
    <ngb-alert [dismissible]="false">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </ngb-alert>
    <div *ngIf="type">
      <ngb-alert [type]="type" (close)="closeAlert()">
        <strong>{{ type }}!</strong> Better check yourself, you're not looking too good.
      </ngb-alert>
    </div>
    <ngb-alert *ngIf="!staticAlertClosed" [type]="'info'" (close)="staticAlertClosed = true">
      <strong>Info!</strong> Better check yourself, you're not looking too good.
    </ngb-alert>

    <ngb-alert *ngIf="successMessage" [type]="'danger'" (close)="closeAlert()">
      <strong>Error!</strong> {{ successMessage }}
    </ngb-alert>

    <button type="button" class="btn btn-default" (click)="showTimeAlert()">Show Alert!</button>
  `
})

export class MyAlertComponent implements OnInit {

  type = 'success';

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.staticAlertClosed = true;
    }, 10000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
  }

  showTimeAlert = () => {
    this._success.next(`${new Date()}`);
  }

  closeAlert = () => {
    this.type = null;
  }

}
