import { AuthService } from './core/services/auth.service';
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
  constructor(private configSvc: AppConfigService,
              private authSvc: AuthService,
              private dataSvc: DataService) { }

  ngOnInit() {

  }


  }



