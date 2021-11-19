import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../users';
import { MemberRegistrationService } from '../member-registration.service';
import { Dependent } from '../dependent';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  maxDate = new Date();
  dob :any;
  Age :number;
  maxAge: boolean;
  randomnum: number;
  randomstring: string;
  closeResult:string
 success: boolean;
 count:number;
 show:boolean;
 dependent1present:boolean;
 dependent2present:boolean;
 dmemberid1: string;
 dmemberid2: string;
 user =new Users();
 dependent =new Dependent();
 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private _service: MemberRegistrationService
    

  ) {

  }
  
  
  
  memberId:String;

 
  ngOnInit(){
    this.count=0;
    this.show=true;
    this.registerForm = this.formBuilder.group({
      firstname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      lastname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,}$')]],
      dob: ['',Validators.required],
      contactnumber: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      pan: ['',[Validators.required,Validators.pattern('^[A-Z0-9]{12}$')]],
      address: ['',Validators.required],
      country: ['',Validators.required],
      state: ['',Validators.required],
      dependents: this.formBuilder.array([this.formBuilder.group(
        {
          dependentName:[''],
          dependentDOB:[''],
        }
        )]),
      
    
  });
 
  }


  get dependents(){
    return this.registerForm.get('dependents') as FormArray;
  }


  addDependents() {
   
    
   if(this.count==0)
   {
     this.dependent1present=true;
     this.dmemberid1=this.randomnumber();
   }
   if(this.count==1)
   {
     this.dependent2present=true;
     this.dmemberid2=this.randomnumber();
   }
   this.count=this.count+1;
    this.dependents.push(this.formBuilder.group({dependentName:'',dependentDOB:'',}));
   if(this.count==2)
   {
 this.show=false;
   }
  
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
    this.states=this.countryList.find(con => con.name==count).states;
  }
 randomnumber()
 {
 this.randomstring="R-"
  this.randomnum =Math.floor(100 + 899 * Math.random());
  this.randomstring +=String(this.randomnum);

  return this.randomstring;
 }
  ageCalculator(){
    this.dob=this.registerForm.get('dob')?.value;
    console.log(this.dob);
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
    return this.Age;
  }

  onFormSubmit() {
    this.submitted = true;
    console.log(this.maxAge);
    if(this.registerForm.valid){
      
      this.memberId=this.randomnumber();
      console.log(this.memberId);
      this.success=true;
     /* this._service.RegisterUserFromRemote(this.user).subscribe(
        data=>{
        console.log("response recieved");
        this.router.navigateByUrl('/login')
        },
       error=>{
         console.log("exception occured");
           
           }
       )*/
    }

    if (this.registerForm.invalid) {
    return;
    }
    
    
    }


}


