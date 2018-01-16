import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergingStreamsRoutingModule } from './merging-streams-routing.module';

import { MaterialModule } from '../material/material.module';

import { MergingStreamsComponent } from './merging-streams.component';

@NgModule({
  imports: [
    CommonModule,
    MergingStreamsRoutingModule,
    MaterialModule
  ],
  declarations: [MergingStreamsComponent]
})
export class MergingStreamsModule { }
