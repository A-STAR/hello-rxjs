import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MappingFunctionsRoutingModule } from './mapping-functions-routing.module';

import { MaterialModule } from '../material/material.module';

import { MappingFunctionsComponent } from './mapping-functions.component';

@NgModule({
  imports: [
    CommonModule,
    MappingFunctionsRoutingModule,
    MaterialModule
  ],
  declarations: [MappingFunctionsComponent]
})
export class MappingFunctionsModule { }
