import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserForm: FormGroup;

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
    this.registerUserForm = this.createFormGroup();
  }
  onSubmit() {
    this.userService.registerUser(this.registerUserForm.value)
      .subscribe(data => {
          console.log(data);
        }
      );
    this.toLogin();
  }
  toLogin() {
    this.route.navigateByUrl('/login');
  }
  createFormGroup() {
    return new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
