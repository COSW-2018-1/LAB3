import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'app';

	public searchForm: FormGroup;
	public notFound: string;
	private ruser: User;

	constructor(
		public authService: AuthService,
		public router: Router,
		public userService: UserService,
		public formBuilder: FormBuilder) {
		//this.ruser = new User(0, "", "", "", "", "");
		if (!this.authService.isLoggedIn()) {
			this.router.navigate(['/']);
		}
	}

	isLoggedIn() {
		return this.authService.isLoggedIn();
	}

	signOut() {
		this.authService.signOut();
	}

	ngOnInit() {
		this.searchForm = this.formBuilder.group({
			email: ''
		});
	}

	isSearch() {
		return this.ruser==null;
	}

	clearSearch(){
		this.ruser = new User(0, "Not", "Found", "http://i0.kym-cdn.com/profiles/icons/big/000/071/040/404%20is%20not%20found.jpg", "@", "");
		this.notFound= "-_-";
	}

	doSearch() {
		//this.notFound=""; //poner en blanco para que no imprima error anterior si encuentra al usuario
		this.userService.busquedaPorEmail(
			this.searchForm.get('email').value
		).subscribe(userResponse => {
			this.ruser = userResponse;
		}, error => {
			this.notFound = 'Error Busqueda: ' + (error && error.message ? error.message : '');
		})
	}

}

