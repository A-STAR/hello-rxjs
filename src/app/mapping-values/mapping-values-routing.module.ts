import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingValuesComponent } from './mapping-values.component';

const routes: Routes = [
  {
    path: '',
    component: MappingValuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingValuesRoutingModule { }
