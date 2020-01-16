import { AppConfigService } from '@services/app-config.service';
import { Component } from '@angular/core';
import { AppConfigModel } from '@shared/models/app-config-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-base-framework';
  private appConfigModel: AppConfigModel;

  constructor(private configSvc: AppConfigService) {
    console.log(this.configSvc.configuration().baseUrl);
  }

  throwLocalError() {
    throw new Error('dummy error!');
  }
}
