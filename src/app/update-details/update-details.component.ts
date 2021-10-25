import { Component, OnInit } from '@angular/core';
import User from 'src/app/User.json'
import { Users } from '../users';


@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  
  userobj: Users = User;  
  constructor() {
    
    }
  
  
  


  ngOnInit(): void {
   
    
  }

}
