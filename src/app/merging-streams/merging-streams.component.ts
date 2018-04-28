import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { filter, map, startWith, scan } from 'rxjs/operators';

@Component({
  selector: 'merging-streams',
  templateUrl: './merging-streams.component.html',
  styleUrls: ['./merging-streams.component.scss']
})
export class MergingStreamsComponent implements OnInit {

  @ViewChild('left') left;
  @ViewChild('right') right;

  position: any;

  constructor() { }

  ngOnInit() {
    const left$ = fromEvent(this.left._elementRef.nativeElement, 'click').pipe(map(event => ({ x: -10, y: 0 }) ));

    const right$ = fromEvent(this.right._elementRef.nativeElement, 'click').pipe(map(event => ({ x: 10, y: 0 }) ));

    merge(left$, right$)
      .pipe(
        startWith({ x: 200, y: 200 }),
        scan((acc, curr) => Object.assign({ }, acc, {x: acc.x + curr.x}) )
      )
      .subscribe(position => this.position = position);
  }

}
