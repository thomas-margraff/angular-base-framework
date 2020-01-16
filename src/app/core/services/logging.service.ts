import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logClientError(error) {
    console.error(error);
  }

  logHttpResonseError(error) {
    console.error(error);
  }

  logMessage(msg: string) {
    console.log(msg);
  }
}
