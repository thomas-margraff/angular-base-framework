import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEventType,
  HttpResponse
 } from '@angular/common/http';
 import { Observable, throwError } from 'rxjs';
 import { catchError, retry, tap, finalize } from 'rxjs/operators';
 import { LoggingService } from '@services/logging.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private logService: LoggingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        tap(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              const eventInfo = {
                status: event.status,
                statusText: event.statusText,
                url: event.url,
                ok: event.ok,
                type: event.type,
              };
              this.logService.logMessage('HttpResponse:' + JSON.stringify(eventInfo, null, 2));
            }
          },
        ),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';

          // client-side error
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          }

          // server-side error
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              // refresh token
            }
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            return throwError(error);        }
        }), finalize(() => {
          // turn spinner off - etc
      })
    );
  }
}
