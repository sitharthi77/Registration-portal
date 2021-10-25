import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: any = {};
  maxDate = new Date();
  dob :any;
  Age :number;
  maxAge: boolean;
  randomnum: number;
  randomstring: string;
  closeResult:string
 success: boolean;
  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
    

  ) { }
  memberId:String;

 
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      lastname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,}$')]],
      dob: ['',Validators.required],
      contactnumber: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      pan: ['',Validators.required],
      address: ['',Validators.required],
      country: ['',Validators.required],
      state: ['',Validators.required],
      
  });
 
  }
  
  open(content)
  {
    if(this.registerForm.valid){
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'}).result.then((result)=>{
      this.closeResult='Closed with : ${result}'; 
    },(reason)=>{
      this.closeResult='Dismissed ${this.getDismissReason(reason)}';
    }
    );
  }
  }

  private getDismissReason(reason: any): string{
    if(reason===ModalDismissReasons.ESC){
      return 'by pressing ESC';
    }else if(reason=== ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';

    }else {
      return 'with: ${reason}';
    }

    }
  
  get fval() { return this.registerForm.controls; }
  countryList:Array<any> =[
    {name:'India', states:['Select State','chennai','Banglore','hyderabad']},
    {name:'china',states:['Select State','Beijing','Shanghai','Hubei']},
    {name:'USA', states:['Select State','NewYork','Texas','california']},
  ];
  states:Array<any>;
  changeCountry(count){
    this .states=this.countryList.find(con => con.name==count).states;
  }
 randomnumber()
 {
 this.randomstring="R-"
  this.randomnum =Math.floor(100 + 899 * Math.random());
  this.randomstring +=String(this.randomnum);

  return this.randomstring;
 }
  ageCalculator(){
    if(this.dob){
      this.maxAge=false;
      const convertAge = new Date(this.dob);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.Age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      console.log(this.Age);

      if(this.Age<18){
        this.maxAge=true;
      }

      
    }
  }

  onFormSubmit() {
    this.submitted = true;
   
    if(this.registerForm.valid){
      
      this.memberId=this.randomnumber();
      console.log(this.memberId);
      this.success=true;
    }

    if (this.registerForm.invalid) {
    return;
    }
    
    //this.router.navigateByUrl('/login');
    }


}


