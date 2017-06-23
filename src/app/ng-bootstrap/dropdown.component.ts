import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
      <h4>Dropdown</h4>
      <div ngbDropdown class="d-inline-block">
        <button type="button" class="btn btn-outline-primary" id="cityDropdown" ngbDropdownToggle>City</button>
        <div class="dropdown-menu" aria-labelledBy="cityDropdown">
          <button type="button" class="dropdown-item">南通</button>
          <button type="button" class="dropdown-item">泰州</button>
          <button type="button" class="dropdown-item">宿迁</button>
          <button type="button" class="dropdown-item">南京</button>
        </div>
      </div>
    `
})
export class DropdownComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
