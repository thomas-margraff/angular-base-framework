// angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// feature modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { Feature1Module } from './feature1/feature1.module';

// routing
import { AppRoutingModule } from './app-routing.module';

// 3rd party modules
import { ToastrModule } from 'ngx-toastr';

// services
import { GlobalErrorHandlingService } from '@services/global-error-handling.service';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './root-components/header/header.component';
import { HomeComponent } from './root-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Feature1Module,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlingService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
