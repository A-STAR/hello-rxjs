import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, startWith, tap, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sequencing-streams',
  templateUrl: './sequencing-streams.component.html',
  styleUrls: ['./sequencing-streams.component.scss']
})
export class SequencingStreamsComponent implements OnInit {

  @ViewChild('ball') ball;
  position: any;

  ngOnInit() {
    const BALL_OFFSET = 50;

    const move$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(map(event => {
      const offset = this.offset(event.target);
      return {
        x: event.clientX - offset.left - BALL_OFFSET,
        y: event.pageY - BALL_OFFSET
      };
    }));

    const down$ = fromEvent<MouseEvent>(this.ball.nativeElement, 'mousedown').pipe(
      tap(event => this.ball.nativeElement.style.pointerEvents = 'none')
    );

    const up$ = fromEvent<MouseEvent>(document, 'mouseup').pipe(
      tap(event => this.ball.nativeElement.style.pointerEvents = 'all')
    );

    down$
      .pipe(
        switchMap(event => move$.pipe(takeUntil(up$))),
        startWith({ x: 200, y: 200})
      )
      .subscribe(position => this.position = position);
  }

  offset(element: any) {
    const body = document.body;
    const rect = element.getBoundingClientRect();

    const offset = {
      top: rect.top + body.scrollTop,
      left: rect.left + body.scrollLeft
    };

    return offset;
  }

}
