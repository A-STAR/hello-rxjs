import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SequencingStreamsComponent } from './sequencing-streams.component';

const routes: Routes = [
  {
    path: '',
    component: SequencingStreamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SequencingStreamsRoutingModule { }
