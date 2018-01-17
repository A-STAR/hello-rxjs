import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { filter } from 'rxjs/operators/filter';
import { mapTo } from 'rxjs/operators/mapTo';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { scan } from 'rxjs/operators/scan';

@Component({
  selector: 'mapping-functions',
  templateUrl: './mapping-functions.component.html',
  styleUrls: ['./mapping-functions.component.scss']
})
export class MappingFunctionsComponent implements OnInit {

  @ViewChild('left') left;
  @ViewChild('right') right;

  position: any;

  constructor() { }

  ngOnInit() {
    const leftArrow$ = fromEvent(document, 'keydown').pipe(
      filter((event: KeyboardEvent) => event.key === 'ArrowLeft'),
      mapTo(position => this.decrement(position, 'x', 10))
    );

    const rightArrow$ = fromEvent(document, 'keydown').pipe(
      filter((event: KeyboardEvent) => event.key === 'ArrowRight'),
      mapTo(position => this.increment(position, 'x', 10))
    );

    const upArrow$ = fromEvent(document, 'keydown').pipe(
      filter((event: KeyboardEvent) => event.key === 'ArrowUp'),
      mapTo(position => this.decrement(position, 'y', 10))
    );

    const downArrow$ = fromEvent(document, 'keydown').pipe(
      filter((event: KeyboardEvent) => event.key === 'ArrowDown'),
      mapTo(position => this.increment(position, 'y', 10))
    );

    const start = (obj) => obj;

    merge(leftArrow$, rightArrow$, upArrow$, downArrow$)
      .pipe(
        // startWith(start({ x: 200, y: 200 })),
        startWith(start({ x: 200, y: 200 })),
        scan((acc, curr) => curr(acc))
      )
      .subscribe(position => this.position = position);
  }

  increment(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] + value});
  }

  decrement(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] - value});
  }

}
