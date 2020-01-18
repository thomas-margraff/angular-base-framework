import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showCreate() {
    this.router.navigate(['featureone/create']);
  }

  back() {
    this.router.navigate(['featureone/']);
  }

}