import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';

import {UserService}from '../../services/user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  private todoForm: FormGroup;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      name: '',
      lastname: '',
	  image: '',
	  email:'',
	  password:''
    });
  }

  onSubmit() {
    this.userService.create(
      this.todoForm.get('name').value,
      this.todoForm.get('lastname').value,
	  this.todoForm.get('image').value,
	  this.todoForm.get('email').value,
	  this.todoForm.get('password').value
    );

    this.router.navigate(['/useredit']);
  }

}
