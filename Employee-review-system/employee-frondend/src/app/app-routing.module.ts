import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NormaluserContentComponent } from './components/normaluser-content/normaluser-content.component';
import { ManagerContentComponent } from './components/manager-content/manager-content.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';

//Route mapping
const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: NormaluserContentComponent },
  { path: 'man', component: ManagerContentComponent },
  { path: 'admin', component: AdminContentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
