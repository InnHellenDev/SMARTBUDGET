export class SignUp {
    constructor( _id='', username='', email = '', password='', roles='') {
        this._id=_id;
        this.username=username;
        this.email=email;
        this.password= password;
        this.roles=roles;
     }
    //Crear un modelo de datos en la app
    _id:string;
    username:string;
    email:string;
    password:string;
    roles:string;
}