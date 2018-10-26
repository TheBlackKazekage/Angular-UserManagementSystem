import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../users.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  @Input() isLoggedIn;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data =>
      this.users = data['data']);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.isLoggedIn = params.get('status');
    });
  }
  delete(user) {
    // this.userService
  }
}
