export class Auth {
    constructor(_id = '', email = '', password='') {
        this._id=_id;
        this.email=email;
        this.password= password;
        
     }
    //Crear un modelo de datos en la app
    _id:string;
    email:string;
    password:string;
}
