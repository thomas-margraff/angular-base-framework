
// appConfig.json gets serialized into this
export class AppConfigModel {
  public baseUrl: string;

  constructor(configJson) {
    this.baseUrl = configJson.baseUrl;
  }
}
