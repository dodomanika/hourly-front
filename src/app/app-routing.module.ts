import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HoursListComponent} from './hours-list/hours-list.component';
import {LogoutComponent} from './logout/logout.component';
import {TimeRecordComponent} from './time-record/time-record.component';
import {RouteGuardService} from './service/route-guard.service';
import {RegisterComponent} from './register/register.component';
import {TaskManageComponent} from './task-manage/task-manage.component';
import {TaskComponent} from './task/task.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'hours/:dateIndex', component: HoursListComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'hours/:dateIndex/:id', component: TimeRecordComponent, canActivate: [RouteGuardService]},
  {path: 'tasks', component: TaskManageComponent, canActivate: [RouteGuardService]},
  {path: 'tasks/:id', component: TaskComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
