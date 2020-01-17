
// appConfig.json gets serialized into this
export class AppConfigModel {
  public baseUrl: string;
  public logHttpEvent: boolean;

  constructor(configJson) {
    this.baseUrl = configJson.baseUrl;
    this.logHttpEvent = configJson.logHttpEvent;
  }
}
