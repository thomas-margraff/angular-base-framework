import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logClientError(error) {
    console.error(error);
  }

  logHttpErrorResonse(error) {
    console.error(error);
  }

  logMessage(msg: string) {
    console.log(msg);
  }

  logError(message: string, stack: string) {
    // Send errors to be saved here
    // The console.log is only for testing this example.
    console.log('LoggingService: ' + message);
  }

}
