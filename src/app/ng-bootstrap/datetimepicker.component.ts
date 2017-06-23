import { Component, OnInit, Injectable } from '@angular/core';

import { NgbDatepicker, NgbDateStruct, NgbDatepickerConfig, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  template: `
      <h3>Datepicker Demo</h3>
      <app-datepicker-basic></app-datepicker-basic>
      <hr>
      <app-datepicker-popup></app-datepicker-popup>
      <hr>
      <app-datepicker-i18n></app-datepicker-i18n>
    `
})
export class MyDatepickerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}


const now = new Date();
@Component({
  selector: 'app-datepicker-basic',
  template: `
      <h4>Simple Datepicker</h4>

      <ngb-datepicker #dp [(ngModel)]="dateModel" (navigate)="date = $event.next"></ngb-datepicker>

      <button type="button" class="btn btn-sm btn-outline-primary" (click)="selectToday(dp)">
        Select Today
      </button>
      <pre>{{ date.year }}-{{ date.month }}</pre>
      <pre>{{ dateModel | json }}</pre>
    `
})
export class DatepickerBasicComponent implements OnInit {

  private dateModel: NgbDateStruct;
  private date: { year: number, month: number };

  selectToday = (dp) => {
    const model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    this.dateModel = model;
    dp.navigateTo(model);
  }

  ngOnInit() { }
}


@Component({
  selector: 'app-datepicker-popup',
  template: `
      <h4>Datepicker Popup</h4>
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input class="form-control" [dayTemplate]="customDayTemplate" placeholder="yyyy-mm-dd"
              name="dp" [(ngModel)]="model" ngbDatepicker #dp="ngbDatepicker">
            <div class="input-group-addon" (click)="dp.toggle()">
              <img src="https://ng-bootstrap.github.io/img/calendar-icon.svg" style="width: 1.2rem; height: 1rem; cursor: pointer;"/>
            </div>
          </div>
        </div>
      </form>
      <pre *ngIf="model">{{ model.year }}-{{ model.month }}-{{ model.day }}</pre>

      <ng-template #customDayTemplate let-date="date" let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled">
        <span class="custom-day" [class.weekend]="isWeekend(date)"
          [class.bg-primary]="selected" [class.hidden]="date.month != currentMonth" [class.text-muted]="disabled">
          {{ date.day }}
        </span>
      </ng-template>
    `,
  styles: [`
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        border-radius: 0.25rem;
        display: inline-block;
        width: 2rem;
      }
      .custom-day:hover {
        background-color: #e6e6e6;
      }
      .weekend {
        background-color: #f0ad4e;
        border-radius: 1rem;
        color: white;
      }
      .hidden {
        display: none;
      }
    `
  ],
  providers: [ NgbDatepickerConfig ]
})
export class DatepickerPopupComponent implements OnInit {

  model;
  constructor(private datepickerConfig: NgbDatepickerConfig) {

    datepickerConfig.minDate = { year: 1989, month: 1, day: 31 };
    datepickerConfig.maxDate = { year: 2050, month: 12, day: 31 };

    datepickerConfig.firstDayOfWeek = 7; // 1 - 7

    datepickerConfig.displayMonths = 1; // 1 - 12

    datepickerConfig.outsideDays = 'visible'; // collapsed, none

    datepickerConfig.navigation = 'select'; // arrow, none

    datepickerConfig.showWeekdays = true;

    datepickerConfig.showWeekNumbers = true;

    datepickerConfig.startDate = { year: now.getFullYear(), month: now.getMonth() + 1 };

  }

  isWeekend = (date: NgbDateStruct) => {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() { }
}

const I18N_VALUES = {
  en: {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    fullMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  zh: {
    weekdays: ['一', '二', '三', '四', '五', '六', '日'],
    months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    fullMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  }
};

@Injectable()
export class I18N {

  language = 'en';
}

@Injectable()
export class CustomI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18N) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return I18N_VALUES[this._i18n.language].fullMonths[month - 1];
  }
}

@Component({
  selector: 'app-datepicker-i18n',
  template: `
        <h4>Datepicker Internationalization</h4>
        <div [(ngModel)]="language" ngbRadioGroup>
          <label class="btn btn-primary">
            <input type="radio" [value]="'en'">English
          </label>
          <label class="btn btn-primary">
            <input type="radio" [value]="'zh'">中文
          </label>
        </div>
        <br>
        <ngb-datepicker [(ngModel)]="model"></ngb-datepicker>
        {{ model | json }}
    `,
  providers: [I18N, { provide: NgbDatepickerI18n, useClass: CustomI18n }]
})
export class DatepickerI18nComponent implements OnInit {

  constructor(private _i18n: I18N) { }

  set language(language: string) {
    this._i18n.language = language;
  }

  get language() {
    return this._i18n.language;
  }

  ngOnInit() {
    this.language = this._i18n.language ? this._i18n.language : 'en';
  }
}
