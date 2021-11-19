import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import User from 'src/app/User.json'
import { Users } from '../users';
import { MemberRegistrationService } from '../member-registration.service';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
   submitted = false;
  userobj: Users = User; 
   loginusername: String; 
   loginpswd: String;
   incorrect=false;
  // user =new Users();
  
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _service: MemberRegistrationService

  ) { 
    

    
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,}$')]],
  });

}



get fval() { return this.loginForm.controls; }

onFormSubmit() {
  this.submitted = true;
  this.loginusername=this.loginForm.get('username')?.value;
  this.loginpswd=this.loginForm.get('password')?.value;
 

if((this.loginusername==this.userobj.email) && (this.loginpswd==this.userobj.password) )
{
  this.router.navigateByUrl('/home');
  this.incorrect=false;
}
else{
  this.incorrect=true;
}
/*this._service.loginUserFromRemote(this.user).subscribe(
  data=>{
  console.log("response recieved");
  this.router.navigateByUrl('/home')
  },
 error=>{
   console.log("exception occured");
     
     }
     
 )*/
 
if (this.loginForm.invalid) {
return;
}

}
}
