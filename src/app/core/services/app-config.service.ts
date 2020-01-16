import { AppConfigModel } from '@shared/models/app-config-model';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG_TOKEN } from '@core/injectors/injectors';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfigModel: AppConfigModel;

  constructor(@Inject(APP_CONFIG_TOKEN) public cfg: string, private http: HttpClient) {
    this.appConfigModel = new AppConfigModel(cfg);
  }

  configuration(): AppConfigModel {
    return this.appConfigModel;
  }
}
