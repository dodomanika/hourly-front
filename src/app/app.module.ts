import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HoursListComponent } from './hours-list/hours-list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TimeRecordComponent } from './time-record/time-record.component';
import {HttpInterceptorBasicAuthService} from './service/http/http-interceptor-basic-auth.service';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TaskManageComponent } from './task-manage/task-manage.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HoursListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TimeRecordComponent,
    RegisterComponent,
    WelcomeComponent,
    TaskManageComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
