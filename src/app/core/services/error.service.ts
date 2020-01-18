import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
        return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
      return error.stack;
  }

  get1ServerMessage(error: HttpErrorResponse): string {
      return error.message;
  }

  // https://github.com/pascaliske/ngx-sentry/blob/master/projects/ngx-sentry/src/lib/sentry.interceptor.ts
  getServerMessage(request: HttpRequest<any>, response: HttpErrorResponse): string {
    const defaultMessage = 'Http request failed. ({method}, {status}, {url})';
    const replace = (msg: string) => {
        const map = {
            method: request.method,
            url: request.url,
            status: response.status,
            message: response.message,
        };

        // replace all keys with their values
        Object.keys(map).forEach(key => {
            msg = msg.replace(new RegExp(`{${key}}`, 'g'), map[key])
        });

        return msg;
    };

    // use default message
    return replace(defaultMessage);
  }
  getServerStack(error: HttpErrorResponse): string {
      // handle stack trace
      return 'stack';
  }

}
