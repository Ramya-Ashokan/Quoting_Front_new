import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Modules/User';
import { AutheticateServiceService } from '../Services/autheticate-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm: FormGroup | any;

userName:FormControl;
email:FormControl; 
password:FormControl;
confirmPassword:FormControl;
dob:FormControl;
address:FormControl;
phoneno:FormControl;
gender:FormControl;
// inputStates:FormControl;
// inputDistrict:FormControl;
  errorMessage: any;
  cList:any;
message:any;

constructor(private rService:AutheticateServiceService,private router:Router) { 
  //this.customer=new Customer('','','','','','','','','','','');
      this.userName=new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z\s.]{2,}$/)]);
      this.email=new FormControl('',[Validators.required,Validators.pattern(/^[a-z]([A-Za-z0-9_.])+@[a-z]+\.(com|in|org)$/)]);
      this.password=new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)]);
    this.confirmPassword=new FormControl('',[Validators.required]);
      this.dob=new FormControl('',[Validators.required]);
    this.address=new FormControl('',[Validators.required]);
    
    // this.inputStates=new FormControl('',[Validators.required]);
    // this.inputDistrict=new FormControl('',[Validators.required],);
    
    
   
   this.phoneno=new FormControl('',[Validators.required,Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]);
   this.gender=new FormControl('',[Validators.required]);
  
      this.registrationForm=new FormGroup(
       
      {
      userName:this.userName,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword,
      dob:this.dob,
      address:this.address,

      
      // inputStates:this.inputStates,
      // inputDistrict:this.inputDistrict,
      
    
      phoneno:this.phoneno,
      gender:this.gender,
   
    },
    [this.passwordMatchValidator]);
   
    }


    onSubmit() {

      if (this.registrationForm.valid) {
  
        // Create a new Customer object with form values
  
        const newUser: User = {
          // id: this.cList.length + 1, // Assuming you have a unique ID logic
          userName: this.registrationForm.value.userName,

          email: this.registrationForm.value.email,

          password: this.registrationForm.value.password,
        confirmPassword:this.registrationForm.value.confirmPassword,
          dob:this.registrationForm.value.dob,
        
          address:this.registrationForm.value.address,
         
          phoneno:this.registrationForm.value.phoneno,
          gender: this.registrationForm.value.gender,
          
       
        };
  
   
  
        // Add the new customer object to the customersList
        console.log(newUser);
        this.rService.addUser(newUser).subscribe((cobj: any)=>{this.cList=cobj});
        // this.cList.push(newCustomer);
        // console.log("customer list",this.cList);
        this.message='Registration Success';
        this.router.navigate(['/signin']);
      }

    }
   // Custom validator function to check if passwords match
private passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}


}
