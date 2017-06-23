import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  template: `
    <form [formGroup]="radioGroupForm">
      <div ngbRadioGroup name="radioBasic" formControlName="model">
        <label class="btn btn-primary">
          <input type="radio" [value]="1">Left (pre-checked)
        </label>
        <label class="btn btn-primary">
          <input type="radio" [value]="'middle'">Middle
        </label>
        <label class="btn btn-primary">
          <input type="radio" [value]="false">Right
        </label>
      </div>
    </form>
    <pre>{{ radioGroupForm.value.model }}</pre>
    <hr>
    <app-checkbox></app-checkbox>
  `,
})

export class MyButtonsComponent implements OnInit {

  private radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}

@Component({
  selector: 'app-checkbox',
  template: `
    <form [formGroup]="checkboxForm">
      <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-primary" [class.active]="checkboxForm.value.left">
          <input type="checkbox" formControlName="left">Left
        </label>
        <label class="btn btn-primary" [class.active]="checkboxForm.value.middle">
          <input type="checkbox" formControlName="middle">Middle
        </label>
        <label class="btn btn-primary" [class.active]="checkboxForm.value.right">
          <input type="checkbox" formControlName="right">Right
        </label>
      </div>
    </form>
    <pre>{{ checkboxForm.value | json }}</pre>
  `
})

export class MyCheckboxComponent implements OnInit {

  private checkboxForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.checkboxForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }

}
