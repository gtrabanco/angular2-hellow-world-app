import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:string[]; // or users:Array<string>

  constructor() {
    this.users = ['Gabriel', 'Manuel', 'Luisa', 'Aitor', 'Fernando'];
  }

  ngOnInit() {
  }

}
