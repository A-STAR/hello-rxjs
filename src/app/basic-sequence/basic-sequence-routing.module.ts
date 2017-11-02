import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicSequenceComponent } from './basic-sequence.component';

const routes: Routes = [
  {
    path: '',
    component: BasicSequenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicSequenceRoutingModule { }
