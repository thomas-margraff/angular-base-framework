import { AppConfigService } from '@services/app-config.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular-base-framework';
  jsonFile: any;

  constructor(private configSvc: AppConfigService, private dataSvc: DataService) { }

  ngOnInit() {
  }

  getLocalData() {
    this.dataSvc.getLocalJsonFile().subscribe( r => {
      this.jsonFile = r;
    });
  }

  throwLocalError() {
    throw new Error('dummy error!');
  }

  throwServerError() {
    this.dataSvc.getBadUrl().subscribe( r => {
      this.jsonFile = r;
    });
  }
}
