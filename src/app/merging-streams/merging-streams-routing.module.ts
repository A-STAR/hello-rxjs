import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MergingStreamsComponent } from './merging-streams.component';

const routes: Routes = [
  {
    path: '',
    component: MergingStreamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergingStreamsRoutingModule { }
