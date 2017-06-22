import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi title!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello {{ name }}!</p>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class MyModalContentComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-modal-component',
  template: `
    <ng-template #content let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Modal with default options</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross close')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
      </div>
    </ng-template>

    <button type="button" class="btn btn-lg btn-outline-primary" (click)="openBasicModal(content)">Modal with default options</button>
    <button type="button" class="btn btn-lg btn-outline-primary" (click)="openContentModal()">Components as content</button>
    <button type="button" class="btn btn-lg btn-outline-primary" (click)="openCustomModal(content)">Modal with custom class</button>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
  `
    .custom-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .custom-modal .close {
      color: white;
    }
  `
  ]
})

export class MyModalComponent {

  constructor(private modalService: NgbModal) { }

  openBasicModal = (content) => {
    this.modalService.open(content).result.then((result) => {
      window.alert(`Closed with ${result}.`);
    }, (reason) => {
      window.alert(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  openContentModal = (type) => {
    const modalRef = this.modalService.open(MyModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }

  openCustomModal = (content) => {
    this.modalService.open(content, { windowClass: 'custom-modal' });
  }

  private getDismissReason = (reason) => {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
