import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  templateUrl: './click-me.component.html'
})

export class ClickMeComponent {

  message: string;
  onClickMe = () => {
    this.message = 'You have clicked me!'
  }
}

