import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { scan } from 'rxjs/operators/scan';

@Component({
  selector: 'maintaining-state',
  templateUrl: './maintaining-state.component.html',
  styleUrls: ['./maintaining-state.component.scss']
})
export class MaintainingStateComponent implements OnInit {

  @ViewChild('right') right;

  position: any;

  constructor() { }

  ngOnInit() {
    fromEvent(this.right._elementRef.nativeElement, 'click')
      .pipe(
        map(event => ({ x: 10, y: 0 }) ),
        startWith({ x: 200, y: 200 }),
        scan((acc, curr) => Object.assign({ }, acc, {x: acc.x + curr.x}) ),
      )
      .subscribe(position => this.position = position);
  }

}
