import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { Role } from '@shared/models/role-model';

const routes: Routes = [
  { path: 'administrator', children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [ AuthGuard ],
        data: { roles: [Role.Admin]}
      }
    ]
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, AdminComponent]
})
export class AdminRoutingModule { }
