import { AppConfigService } from '@services/app-config.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-base-framework';
  jsonFile: any;
  constructor(private configSvc: AppConfigService, private dataSvc: DataService) { }

  ngOnInit() {
  }

  throwLocalError() {
    throw new Error('dummy error!');
  }

  throwServerError() {
    this.dataSvc.getLocalJsonFile().subscribe( r => {
      this.jsonFile = r;
    });

  }


}
