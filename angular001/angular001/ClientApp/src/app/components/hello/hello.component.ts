import { filter } from 'rxjs/operators';
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.scss'],
    animations: [fadeInOut]
})
export class HelloComponent {
  Name = 'Shengwen';

  Message = 'HelloWolrd';

  AA: IRecord[] = [];

  Identity = 1;

  Msg = '';

  /** the record for edit */
  EditRecord: IRecord = null;

  constructor() {
    this.add('a');
    this.add('b');
    this.add('c');
  }

  sayHello() {
    this.Message += '.';
  }

  add(msg: string) {
    const a = {Id: this.Identity ++ , Message: msg} as IRecord;
    this.AA.push(a);
    this.Msg = '';
  }

  remove(index: number, record: IRecord) {

    if (confirm(`do you want to remove? ${record.Message}`)) {
      this.AA.splice(index, 1);
    }
  }

  edit(record: IRecord)
  {
    this.EditRecord = Object.assign({}, record);
  }

  saveEdit() {
    const old = this.AA.filter(x => x.Id === this.EditRecord.Id)[0];
    Object.assign(old, this.EditRecord);
    this.EditRecord = null;
  }

  cancelEdit(){
    this.EditRecord = null;
  }

}

interface IRecord {
  Id: number;
  Message: string;
}
