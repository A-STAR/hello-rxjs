import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainingStateRoutingModule } from './maintaining-state-routing.module';

import { MaterialModule } from '../material/material.module';

import { MaintainingStateComponent } from './maintaining-state.component';

@NgModule({
  imports: [
    CommonModule,
    MaintainingStateRoutingModule,
    MaterialModule
  ],
  declarations: [MaintainingStateComponent]
})
export class MaintainingStateModule { }
