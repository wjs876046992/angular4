import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { MyModalComponent, MyModalContentComponent } from './modal.component';
import { MyAlertComponent } from './alert.component';


@NgModule({
  imports: [ NgbAlertModule, CommonModule ],
  declarations: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent
  ],
  exports: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent
  ],
  providers: [],
  entryComponents: [ MyModalContentComponent ] // 当使用组件作为content时，需要设置此属性
})

export class NgBootstrapModule { }
