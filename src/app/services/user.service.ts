import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { APIService } from '../common/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends APIService {
	private resourceUrl = 'api/user';
	private usuarios: User[] = [
		new User('usuario 1', 'perez', ''),
		new User('usuario 2', 'perez', ''),
		new User('usuario 3', 'perez', '')
	];


	create(name: string, lastname: string, image: string): Observable<User> {
		//this.todos.push(new Todo(description, priority, completed));
		return this.post(this.resourceUrl, new User(name, lastname, image));
	}

	list(): Observable<User[]> {
		return this.get(this.resourceUrl);
	}


	login(username: string, password: string) {
		return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
		  if (loginResponse) {
			this.authService.accessToken = loginResponse.accessToken;
		  }
		});
	  }

	/*
	constructor() {
  
	}*/


	/*
	list(): User[] {
	  return this.usuarios;
	}
  
	create(name: string, lastname: string, image: string) {
	  this.usuarios.push(new User(name, lastname, image));
	}
	*/
}