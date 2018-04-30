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
  {
    path: 'mapping-functions',
    loadChildren: 'app/mapping-functions/mapping-functions.module#MappingFunctionsModule'
  },
  {
    path: 'sequencing-streams',
    loadChildren: 'app/sequencing-streams/sequencing-streams.module#SequencingStreamsModule'
  },
  {
    path: 'stream-origins',
    loadChildren: 'app/stream-origins/stream-origins.module#StreamOriginsModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
