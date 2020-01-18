import { ErrorService } from '@services/error.service';
import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoggingService } from '@services/logging.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '@services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlingService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {

    const errorService = this.injector.get(ErrorService);
    const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    // const message = error.message ? error.message : error.toString();
    let message = '';
    let stackTrace = '';

    if (error instanceof HttpErrorResponse) {
      // Server Error - handled in interceptor
      // message = errorService.getServerMessage(request, error);
      // stackTrace = errorService.getServerStack(error);
      // doesnt show on page ???
      // notifier.showError(message);
    } else {
      // Client Error
      message = errorService.getClientMessage(error);
      stackTrace = errorService.getClientStack(error);
      notifier.showError(message);
    }
    logger.logError(message, stackTrace);
    console.error(error);
  }
}
