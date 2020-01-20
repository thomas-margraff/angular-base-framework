import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: any = [];
  constructor(private router: Router, private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getAllUsers().subscribe(r => {
      this.users = r;
    },
    error => {
      console.log(error);
    });
  }

  showCreate() {
    this.router.navigate(['featureone/create']);
  }

  back() {
    this.router.navigate(['featureone/']);
  }

}
