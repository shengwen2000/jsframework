import { filter } from 'rxjs/operators';
import { asEnumerable } from 'linq-es2015';
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { Listener } from 'selenium-webdriver';

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

  OrderAsc = false;

  Ctx = {id: '1', name: 'david' };

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
    record.$EditRow = Object.assign({}, record);
  }

  saveEdit(record: IRecord) {
    const a = asEnumerable(this.AA).FirstOrDefault(x => x.Id === record.Id);
    Object.assign(a, record);
    a.$EditRow = null;
  }

  cancelEdit(record: IRecord) {
    const a = asEnumerable(this.AA).FirstOrDefault(x => x.Id === record.Id);
    a.$EditRow = null;
  }

  orderby() {
    if (this.OrderAsc) {
      this.AA = asEnumerable(this.AA).OrderBy(x => x.Message).ToArray();
    } else {
      this.AA = asEnumerable(this.AA).OrderByDescending(x => x.Message).ToArray();
    }
    this.OrderAsc = !this.OrderAsc;
  }
}

interface IRecord {
  Id: number;
  Message: string;
  $EditRow?: IRecord;
}
