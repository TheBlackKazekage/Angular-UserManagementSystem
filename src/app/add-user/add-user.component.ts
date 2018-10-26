import { Component, OnInit } from '@angular/core';
import {UserService} from '../users.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {User} from '../common/interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  id: number;
  usersObjects: Array<User> = [];
  addUserForm: FormGroup;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.addUserForm = this.createFormGroup();
  }

  onSubmit() {
    this.userService.createUser(this.addUserForm.value)
      .subscribe(data => {
          console.log(data['id']);
          const userId = data['id'];
          this.id = userId;
        }
      );
    console.log(this.id);
    this.usersObjects.push(new User(this.id, this.addUserForm.value.fullName, this.addUserForm.value.job));
    console.log(this.usersObjects);
  }

  createFormGroup() {
    return new FormGroup({
      fullName: new FormControl(),
      job: new FormControl()
    });
  }
  delete(user) {
    return this.userService.deleteUser(user)
      .subscribe(data => {
        console.log(data);
      });
  }

}
