
// appConfig.json gets serialized into this
export class AppConfigModel {
  public baseUrl: string;
  public logHttpEvent: boolean;
  public badUrl: string;

  constructor(configJson) {
    this.baseUrl = configJson.baseUrl;
    this.logHttpEvent = configJson.logHttpEvent;
    this.badUrl = configJson.badUrl;
  }
}
