import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'featureone', children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
    ]
  },
];

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ListComponent, CreateComponent]
})
export class Feature1RoutingModule { }
