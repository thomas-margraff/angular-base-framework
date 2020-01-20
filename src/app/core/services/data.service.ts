import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '@services/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient, private config: AppConfigService) { }

  getLocalJsonFile() {
    return this.http.get(this.config.configuration().baseUrl);
  }

  getBadUrl() {
    return this.http.get(this.config.configuration().badUrl);
  }

  getAllUsers() {
    return this.http.get<any>(this.config.configuration().getAllUsersUrl);
  }
}
