import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbAlertModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import { MyModalComponent, MyModalContentComponent } from './modal.component';
import { MyAlertComponent } from './alert.component';
import { MyButtonsComponent, MyCheckboxComponent } from './buttons.component';


@NgModule({
  imports: [ NgbAlertModule, NgbButtonsModule, CommonModule, ReactiveFormsModule ],
  declarations: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent,
    MyButtonsComponent,
    MyCheckboxComponent
  ],
  exports: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent,
    MyButtonsComponent,
    MyCheckboxComponent
  ],
  providers: [],
  entryComponents: [ MyModalContentComponent ] // 当使用组件作为content时，需要设置此属性
})

export class NgBootstrapModule { }
