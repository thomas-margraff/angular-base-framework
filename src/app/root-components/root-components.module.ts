import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RootComponentsRoutingModule } from './root-components-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RootComponentsRoutingModule
  ]
})
export class RootComponentsModule { }
