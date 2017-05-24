import { Component } from '@angular/core';

@Component({
  selector: 'keyup',
  templateUrl: './keyup.component.html'
})

export class KeyupComponent {

  values = '';
  onKeyup = (event: any) => {
    this.values += event.target.value + ' | ';
  }
}
