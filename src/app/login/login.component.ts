import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginUserForm = this.createFormGroup();
  }
  onSubmit() {
    this.userService.loginUser(this.loginUserForm.value)
      .subscribe(data => {
        console.log(data);
        this.toHome();
      });
  }
  toHome() {
    const status = true;
    this.router.navigate(['/dashboard', status]);
  }

  createFormGroup() {
    return new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      }
    );
  }
}
