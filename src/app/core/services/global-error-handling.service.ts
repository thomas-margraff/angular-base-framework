import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoggingService } from './logging.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlingService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error) {

    const loggingService = this.injector.get(LoggingService);

    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const message = error.message ? error.message : error.toString();

    if (error instanceof HttpErrorResponse) {
      loggingService.logHttpResonseError(error);
    } else {
      loggingService.logClientError(error.message);
    }
  }
}
