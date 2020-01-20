import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error-interceptor';
import { JwtInterceptor } from './jwt.interceptor';

export const InterceptorProviders =
  [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ];

