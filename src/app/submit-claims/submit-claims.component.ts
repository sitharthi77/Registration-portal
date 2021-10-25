import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-submit-claims',
  templateUrl: './submit-claims.component.html',
  styleUrls: ['./submit-claims.component.css']
})
export class SubmitClaimsComponent implements OnInit {
  claimsForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(){
    this.claimsForm = this.formBuilder.group({
      memberId: ['',Validators.required],
      firstname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      lastname: ['',[Validators.required,Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      admissionDate: ['', Validators.required],
      dischargeDate: ['', Validators.required],
      Provider: ['',Validators.required],
      billAmount:  ['',Validators.required]
      
  });
  }
  get fval() { return this.claimsForm.controls; }
  onFormSubmit() {
    this.submitted = true;
    if (this.claimsForm.invalid) {
    return;
    }
    }


}
