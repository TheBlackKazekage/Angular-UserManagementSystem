import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  isLoggedIn;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.isLoggedIn = params.get('status');
    });
    console.log(this.isLoggedIn);
  }
  onLogoutClick() {}

}
