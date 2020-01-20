// angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// feature modules
import { AuthModule } from './auth/auth.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { Feature1Module } from './feature1/feature1.module';

// routing
import { AppRoutingModule } from './app-routing.module';

// 3rd party modules
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// services
import { GlobalErrorHandlingService } from '@services/global-error-handling.service';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './root-components/header/header.component';
import { RootComponentsModule } from './root-components/root-components.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootComponentsModule,
    AdminModule,
    AuthModule,
    Feature1Module,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
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
