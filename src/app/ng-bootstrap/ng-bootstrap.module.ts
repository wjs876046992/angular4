import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbAlertModule, NgbButtonsModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { MyModalComponent, MyModalContentComponent } from './modal.component';
import { MyAlertComponent } from './alert.component';
import { MyButtonsComponent, MyCheckboxComponent } from './buttons.component';
import { MyCollapseComponent } from './collapse.component';


@NgModule({
  imports: [
    NgbAlertModule,
    NgbButtonsModule,
    NgbCollapseModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent,
    MyButtonsComponent,
    MyCheckboxComponent,
    MyCollapseComponent
  ],
  exports: [
    MyModalComponent,
    MyModalContentComponent,
    MyAlertComponent,
    MyButtonsComponent,
    MyCheckboxComponent,
    MyCollapseComponent
  ],
  providers: [],
  entryComponents: [ MyModalContentComponent ] // 当使用组件作为content时，需要设置此属性
})

export class NgBootstrapModule { }
