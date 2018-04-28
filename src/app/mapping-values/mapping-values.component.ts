import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'mapping-values',
  templateUrl: './mapping-values.component.html',
  styleUrls: ['./mapping-values.component.scss']
})
export class MappingValuesComponent implements OnInit {

  @ViewChild('button') button;

  message: string;

  constructor() {
    this.message = 'Hello RxJS!';
  }

  ngOnInit() {
    fromEvent(this.button._elementRef.nativeElement, 'click')
      .pipe(
        filter((event: KeyboardEvent) => event.shiftKey),
        map(event => 'Beast Mode Activated!')
      )
      .subscribe(message => this.message = message);
  }

}
