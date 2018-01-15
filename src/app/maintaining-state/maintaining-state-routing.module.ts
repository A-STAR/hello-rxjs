import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintainingStateComponent } from './maintaining-state.component';

const routes: Routes = [
  {
    path: '',
    component: MaintainingStateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainingStateRoutingModule { }
