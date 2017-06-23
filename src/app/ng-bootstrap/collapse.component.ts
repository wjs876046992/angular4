import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  template: `
      <button type="button" class="btn btn-outline-primary" (click)="isCollapsed = !isCollapsed"
              [attr.aria-expand]="!isCollapsed" aria-controls="collapseExample">
        Toggle
      </button>

      <div id="collapseExample" [ngbCollapse]="isCollapsed">
        <div class="card">
          <div class="card-block">
            You can collapse this card by clicking Toggle.
          </div>
        </div>
      </div>

    `
})
export class MyCollapseComponent implements OnInit {

  private isCollapsed: boolean;
  ngOnInit() {
    this.isCollapsed = false;
  }
}
