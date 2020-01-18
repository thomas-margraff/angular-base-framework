import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ListComponent } from './components/list/list.component';

import { Feature1RoutingModule } from './feature1-routing.module';

import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';

@NgModule({
  imports: [
    SharedModule,
    Feature1RoutingModule
  ],
  declarations: [ListComponent, HomeComponent, CreateComponent],
  exports: [ ]
})
export class Feature1Module { }
