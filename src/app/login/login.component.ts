import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import User from 'src/app/User.json'
import { Users } from '../users';



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
  
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

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
  console.log('form value',this.loginusername);
  console.log('json value',this.userobj.username);
if((this.loginusername==(this.userobj.username)) && (this.loginusername==(this.userobj.username)))
{
 
this.router.navigateByUrl('/home');
}

if (this.loginForm.invalid) {
return;
}

}
}
