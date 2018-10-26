import { Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {AddUserComponent} from './add-user/add-user.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {UpdateComponent} from './update/update.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

export const appRoutes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'dashboard/:status', component: UserListComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'register-user', component: RegisterComponent},
  {path: 'login-user', component: LoginComponent},
  {path: 'update-user/:id', component: UpdateComponent},
  {path: 'update-profile', component: UpdateProfileComponent},
  {path: '**', component: UserListComponent}
];
