import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingValuesRoutingModule } from './mapping-values-routing.module';

import { MaterialModule } from '../material/material.module';

import { MappingValuesComponent } from './mapping-values.component';

@NgModule({
  imports: [
    CommonModule,
    MappingValuesRoutingModule,
    MaterialModule
  ],
  declarations: [MappingValuesComponent]
})
export class MappingValuesModule { }
