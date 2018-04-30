import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreamOriginsComponent } from './stream-origins.component';

const routes: Routes = [
  {
    path: '',
    component: StreamOriginsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamOriginsRoutingModule { }
