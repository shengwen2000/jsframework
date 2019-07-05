import { Component, Directive, HostListener, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import "bootstrap";

import { window } from 'rxjs/operators';

@Component({
    selector: 'app-demo001',
    templateUrl: './demo001.component.html',
    styleUrls: ['./demo001.component.scss']
})
export class Demo001Component {

  Message = '';

  showDialog() {
    $('#modelId').modal("show");
  }

  deleteAll() {
    // delete data
    this.Message = `all data deleted at ${ new Date()}`;
  }
}

@Directive({
  selector: `[appConfirm]`
})
export class AppConfirmDirective {

  @Output() yes = new EventEmitter<boolean>();
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const ok = confirm('Are you sure you want to do this?');
    if (ok) {
      this.yes.emit();
    }
  }
}
