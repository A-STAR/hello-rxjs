import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

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
    Observable
      .fromEvent(this.button._elementRef.nativeElement, 'click')
      // .fromEvent(this.button.nativeElement, 'click')
      .subscribe(() => this.message = 'Beast Mode Activated!');
  }

}
