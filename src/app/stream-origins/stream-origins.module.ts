import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamOriginsRoutingModule } from './stream-origins-routing.module';

import { StreamOriginsComponent } from './stream-origins.component';
import { LineShapeComponent } from './shared/line-shape/line-shape.component';

@NgModule({
  imports: [
    CommonModule,
    StreamOriginsRoutingModule
  ],
  declarations: [
    StreamOriginsComponent,
    LineShapeComponent
  ]
})
export class StreamOriginsModule { }
