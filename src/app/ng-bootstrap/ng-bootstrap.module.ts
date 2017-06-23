import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbAlertModule, NgbButtonsModule, NgbCollapseModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { MyModalComponent, MyModalContentComponent } from './modal.component';
import { MyAlertComponent } from './alert.component';
import { MyButtonsComponent, MyCheckboxComponent } from './buttons.component';
import { MyCollapseComponent } from './collapse.component';
import {
  MyDatepickerComponent,
  DatepickerBasicComponent,
  DatepickerPopupComponent,
  DatepickerI18nComponent
} from './datetimepicker.component';


@NgModule({
  imports: [
    NgbAlertModule,
    NgbButtonsModule,
    NgbCollapseModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule
  ],
  declarations: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent,
    MyButtonsComponent,
    MyCheckboxComponent,
    MyCollapseComponent,
    MyDatepickerComponent,
    DatepickerBasicComponent,
    DatepickerPopupComponent,
    DatepickerI18nComponent
  ],
  exports: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent,
    MyButtonsComponent,
    MyCheckboxComponent,
    MyCollapseComponent,
    MyDatepickerComponent
  ],
  providers: [],
  entryComponents: [ MyModalContentComponent ] // 当使用组件作为content时，需要设置此属性
})

export class NgBootstrapModule { }
