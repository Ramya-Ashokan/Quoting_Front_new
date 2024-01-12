export class User{
    constructor(
        public userName:string,
        public email:string,
        public password:string,
        public confirmPassword:string,
        public dob:Date,
        public address:string,
        public phoneno:string,
        public gender:string
        )
    {}
     }