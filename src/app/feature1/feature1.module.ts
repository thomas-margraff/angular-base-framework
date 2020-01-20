import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
  imports: [
    SharedModule,
    Feature1RoutingModule
  ],
  declarations: [],
  exports: [ ]
})
export class Feature1Module { }
