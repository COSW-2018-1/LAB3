import { Injectable } from "@angular/core";
import { AppConfiguration } from "../common/config/app-configuration.service";
import { AuthService } from "../common/auth.service";
import { Http } from "@angular/http";
import { APIService } from "../common/api.service";
import { User } from "../models/user";
import { Observable } from "rxjs/Observable";





/*
@Injectable()
export class UserService extends APIService {
	private resourceUrl = 'api/user';
	private users: User[] = [
		new User('user 1', 'apellido 1', '', 'cor@co1.com', '123'),
		new User('user 2', 'apellido 2', '', 'cor@co2.com', '123'),
		new User('user 3', 'apellido 3', '', 'cor@co3.com', '123')
	];

	constructor(
		public config: AppConfiguration,
		public authService: AuthService,
		public http: Http
	){
		super(config, authService, http);
	}
*/
@Injectable()
export class UserService extends APIService {
	private resourceUrl = 'user/';
	
	constructor(
		public config: AppConfiguration,
		public authService: AuthService,
		public http: Http
	){
		super(config, authService, http);
	}

	create(name: string, lastname: string, image: string, email: string, password: string): Observable<User> {
		return this.post(this.resourceUrl, new User(name, lastname, image, email, password));
	}

	list(): Observable<User[]> {
		return this.get(this.resourceUrl+'traerUsers');
	}

	busqueda(email: string): Observable<User> {
		return this.post(this.resourceUrl+'busqueda', email );
	}

	login(name: string, password: string) {	
		console.log(name);
		console.log(password);
		return this.post(this.resourceUrl+'login', { name, password }, { credentials: false }).map(loginResponse => {
			if (loginResponse) {
				this.authService.accessToken = loginResponse.accessToken;
			}
		});
	}

}




/*
@Injectable()
export class UserService extends APIService {
	private resourceUrl = 'api/user';
	private users: User[] = [
		new User('user 1', 'apellido 1', '', 'cor@co1.com', '123'),
		new User('user 2', 'apellido 2', '', 'cor@co2.com', '123'),
		new User('user 3', 'apellido 3', '', 'cor@co3.com', '123')
	];

	constructor(
		public config: AppConfiguration,
		public authService: AuthService,
		public http: Http
	){
		super(config, authService, http);
	}
*/