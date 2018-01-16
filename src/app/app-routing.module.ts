import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/basic-sequence/basic-sequence.module#BasicSequenceModule'
  },
  {
    path: 'mapping-values',
    loadChildren: 'app/mapping-values/mapping-values.module#MappingValuesModule'
  },
  {
    path: 'maintaining-state',
    loadChildren: 'app/maintaining-state/maintaining-state.module#MaintainingStateModule'
  },
  {
    path: 'merging-streams',
    loadChildren: 'app/merging-streams/merging-streams.module#MergingStreamsModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
