import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'basic-sequence',
  templateUrl: './basic-sequence.component.html',
  styleUrls: ['./basic-sequence.component.scss']
})
export class BasicSequenceComponent implements OnInit {

  @ViewChild('button') button;
  // @ViewChild('button', { read: ElementRef }) button: ElementRef;

  message: string;

  constructor() {
    this.message = 'Hello RxJS!';
  }

  ngOnInit() {
    fromEvent(this.button._elementRef.nativeElement, 'click')
    // fromEvent(this.button.nativeElement, 'click')
      .subscribe(() => this.message = 'Beast Mode Activated!');
  }

}
