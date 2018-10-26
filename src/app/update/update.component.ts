import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../users.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user;
  updateUserForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    this.updateUserForm = this.createFormGroup();
    this.user = this.userService.getUser(parseInt(this.route.snapshot.paramMap.get('id'), 0));
    console.log(this.user);
  }
  onSubmit() {
    this.userService.updateUser(this.createFormGroup().value)
      .subscribe(data =>
        console.log(data)
      );
  }
  createFormGroup() {
    return new FormGroup({
      fullName: new FormControl(),
      job: new FormControl()
    });
  }
}
