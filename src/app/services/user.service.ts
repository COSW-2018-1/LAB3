import { AppConfiguration } from "../common/config/app-configuration.service";
import { AuthService } from "../common/auth.service";
import { Http } from "@angular/http";
import { APIService } from "../common/api.service";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsersService extends APIService {
	private resourceUrl = 'api/user';


	constructor(
		public config: AppConfiguration,
		public authService: AuthService,
		public http: Http
	) {
		super(config, authService, http);
	}

	create(name: string, lastname: string, image: string, email: string, password: string): Observable<User> {
		//this.todos.push(new Todo(description, priority, completed));
		return this.post(this.resourceUrl, new User(name, lastname, image, email, password));
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


}





	/*
	constructor() //{
  
	}*/


	/*
	list(): User[] {
	  return this.usuarios;
	}
  
	create(name: string, lastname: string, image: string) {
	  this.usuarios.push(new User(name, lastname, image));
	}
	*/
