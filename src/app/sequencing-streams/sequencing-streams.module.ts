import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SequencingStreamsRoutingModule } from './sequencing-streams-routing.module';

import { MaterialModule } from '../material/material.module';

import { SequencingStreamsComponent } from './sequencing-streams.component';

@NgModule({
  imports: [
    CommonModule,
    SequencingStreamsRoutingModule,
    MaterialModule
  ],
  declarations: [SequencingStreamsComponent]
})
export class SequencingStreamsModule { }
