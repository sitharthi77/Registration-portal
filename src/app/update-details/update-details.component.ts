import { Component, OnInit } from '@angular/core';
import User from 'src/app/User.json'
import { Users } from '../users';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  updateForm: FormGroup;
  submitted = false;
  userobj: Users = User; 
  show1= false;
  show2 = false; 
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    
    }
  
  
  


  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contactnumber: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      pan: ['',[Validators.required,Validators.pattern('^[A-Z0-9]{12}$')]],
      address: ['',Validators.required],
      country: ['',Validators.required],
      state: ['',Validators.required],
      dependent1Name : ['',Validators.required],
      dependent1DOB: ['',Validators.required],
      dependent2Name: ['',Validators.required],
      dependent2DOB: ['',Validators.required],
      
  });
   
    this.checkdependents();
  }
  checkdependents(){

  if(this.userobj.dependent1Name && this.userobj.dependent1DOB){
  this.show1=true;
  }
  if(this.userobj.dependent1Name && this.userobj.dependent1DOB){
  this.show2=true;
   }
}
  get fval() { return this.updateForm.controls; }

  onFormSubmit() {

    this.submitted=true;
    if (this.updateForm.invalid) {
    return;
    }
    }


}
