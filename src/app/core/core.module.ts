import { NgModule } from '@angular/core';
import { InterceptorProviders } from './interceptors/interceptors';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    InterceptorProviders
  ]
})
export class CoreModule { }
