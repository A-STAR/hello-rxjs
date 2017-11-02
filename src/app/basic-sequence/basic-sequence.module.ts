import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicSequenceRoutingModule } from './basic-sequence-routing.module';
import { MaterialModule } from '../material/material.module';
import { BasicSequenceComponent } from './basic-sequence.component';

@NgModule({
  imports: [
    CommonModule,
    BasicSequenceRoutingModule,
    MaterialModule
  ],
  declarations: [BasicSequenceComponent]
})
export class BasicSequenceModule { }
