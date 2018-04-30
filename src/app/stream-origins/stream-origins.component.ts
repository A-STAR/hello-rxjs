import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, pairwise, scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'stream-origins',
  templateUrl: './stream-origins.component.html',
  styleUrls: ['./stream-origins.component.scss']
})
export class StreamOriginsComponent implements OnInit {

  lines: Object[] = [];

  constructor() { }

  ngOnInit() {
    const emptyLine: any = { x1: 0, y1: 0, x2: 0, y2: 0};

    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        map(event => {
          const offset = this.offset(<HTMLHtmlElement>event.target);

          return {
            x: event.clientX + offset.left,
            y: event.pageY + offset.top
          };
        }),
        pairwise(),
        map(positions => {
          const [
            { x: x1, y: y1 },
            { x: x2, y: y2 }
          ] = positions;

          return { x1, x2, y1, y2 };
        }),
        startWith(emptyLine)
      )
      .subscribe(line => this.lines = [...this.lines, line]);
  }

  offset(element: Element) {
    /**
     * size & position of element relative to the viewport
     */
    const rect = element.getBoundingClientRect();

    /**
     * position of element relative to the window
     */
    const offset = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };

    return offset;
  }

}
