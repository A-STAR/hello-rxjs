import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'line-shape',
  templateUrl: './line-shape.component.html',
  styleUrls: ['./line-shape.component.scss']
})
export class LineShapeComponent implements OnInit {

  @Input() line: any;

  constructor() { }

  ngOnInit() {
  }

}
