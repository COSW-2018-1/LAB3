export class User {
	private id: number;
	private name: string;
	private lastname: string;
	private image: string;
	private email: string;
	private password: string;

	constructor(
		id: number,
		name: string,
		lastname: string,
		image: string,
		email: string,
		password: string) {

			this.id = id;
			this.name = name;
			this.lastname = lastname;
			this.image = image;
			this.email = email;
			this.password = password;
	}
}