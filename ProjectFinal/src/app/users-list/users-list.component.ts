import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = [];

  constructor(private userService: UsersService) {

  }

  ngOnInit() {
    // this.users = this.userService.users
    this.userService.getUsers();
  }

}
