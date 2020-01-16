import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { InterceptorProviders } from './interceptors/interceptors';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  providers: [
    InterceptorProviders
  ]
})
export class CoreModule { }
