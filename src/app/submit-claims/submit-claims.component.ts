import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../users';

@Component({
  selector: 'app-submit-claims',
  templateUrl: './submit-claims.component.html',
  styleUrls: ['./submit-claims.component.css']
})
export class SubmitClaimsComponent implements OnInit {
  claimsForm: FormGroup;
  submitted = false;
  maxDate = new Date();  
  randomnum: number;
  claimId :number;
  closeResult:string
  user =new Users();
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  open(content)
  {
    if(this.claimsForm.valid){
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

  getrandomnum()
  {
    this.randomnum =Math.floor(1000000000 + 9000000000* Math.random());
    return this.randomnum;
  }
  ngOnInit(){
    this.claimsForm = this.formBuilder.group({
      memberId: ['',Validators.required],
      firstname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      lastname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      admissionDate: ['', Validators.required],
      dischargeDate: ['', Validators.required],
      Provider: ['',Validators.required],
      billAmount:  ['',[Validators.required,Validators.pattern('^[0-9]*$')]]
      
  });
  
  }


  
  
  get fval() { return this.claimsForm.controls; }
  onFormSubmit() {
    
    this.submitted = true;
    this.claimId=this.getrandomnum();
    if (this.claimsForm.invalid) {
    return;
    }
    }


}
