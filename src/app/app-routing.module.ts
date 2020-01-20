import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

import { HomeComponent } from './root-components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    HomeComponent,
  ]
})
export class AppRoutingModule { }
