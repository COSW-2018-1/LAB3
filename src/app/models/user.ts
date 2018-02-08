export class User {
	private name: string;
	private lastname: string;
	private image: string;
	private email; string;
	private password: string;

	constructor(name: string, lastname: string, image: string, email:string, password: string) {
		this.name = name;
		this.lastname = lastname;
		if(image==""){
			this.image="http://scriptmode.com/videostreamingtutorial/img/overview/user-management.png"
		}else this.image = image;
		this.email=email;
		this.password;
	}
}