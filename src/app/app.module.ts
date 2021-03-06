import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {RouterModule}from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {AppComponent }from './app.component';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import {HomePageComponent}from './pages/home-page/home-page.component';
import {TaskListPageComponent}from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent}from './pages/task-edit-page/task-edit-page.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

import {NgbModule}from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AuthService } from './common/auth.service';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { AppDataService } from './common/app-data.service';
import { ConnectionBackend } from '@angular/http/src/interfaces';
import { UserService } from './services/user.service';
import { TodoService }from './services/todo.service';


const ROUTES = [

	{path: '', component: SignInPageComponent },
	{path: 'home', component: HomePageComponent },
	{path: 'tasks', component: TaskListPageComponent},
	{path: 'edit', component: TaskEditPageComponent },
	{path: 'userlist', component: UserListPageComponent},
	{path: 'useredit', component: UserEditPageComponent},
	{path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
	PageNotFoundComponent,
	UserListPageComponent,
	UserEditPageComponent,
	SignInPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
	ReactiveFormsModule,
	HttpModule,
	FormsModule
  ],
  providers: [
	{
		provide: INITIAL_CONFIG,
		useValue: {
			apiURL: 'http://localhost:8080'
		}
	},
	TodoService,
	UserService,
	AppConfiguration,
	AuthService,
	AppDataService,	
	HttpModule
],
  bootstrap: [AppComponent]
})
export class AppModule { }
