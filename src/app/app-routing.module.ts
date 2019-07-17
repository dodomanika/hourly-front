import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HoursListComponent} from './hours-list/hours-list.component';
import {LogoutComponent} from './logout/logout.component';
import {TimeRecordComponent} from './time-record/time-record.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'hours', component: HoursListComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'hours/:id', component: TimeRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
