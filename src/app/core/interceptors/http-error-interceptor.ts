import { ErrorService } from '@services/error.service';
import { NotificationService } from '@services/notification.service';
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
 import { AppConfigService } from '@services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private logService: LoggingService,
              private appConfig: AppConfigService,
              private errorService: ErrorService,
              private notify: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(
          (event: HttpEvent<HttpEventType>) => {
            if (event instanceof HttpResponse && this.appConfig.configuration().logHttpEvent === true) {
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
        retry(1),
        catchError((error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              // refresh token
            }
            const message = this.errorService.getServerMessage(request, error);
            this.notify.showError(message);
            return throwError(error);
          }
        }), finalize(() => {
          // turn spinner off - etc
      })
    );
  }

}
