import{Injectable}from'@angular/core';

import { User }from '../models/user';

@Injectable()
export class UserService {private usuarios: User[] = [
	new User('usuario 1','perez', ''),
    new User('usuario 2','perez', ''),
    new User('usuario 3','perez', '')
  ];

  constructor() {

  }

  list(): User[] {
    return this.usuarios;
  }

  create(name: string, lastname: string, image: string) {
    this.usuarios.push(new User(name, lastname, image));
  }
}