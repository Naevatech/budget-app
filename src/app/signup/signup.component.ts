import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public formBuilder:FormBuilder, public routes:Router, public userService:RegisterService) { }
  public newUser = this.formBuilder.group({
    fullname:[""],
    phone_no:[""],
    email:[""],
    password:[""],
    uniqueID:[`${"budget"}`+ Math.floor(Math.random()*1000)]
  })
  public users:any = [];
  public message:any = "";
  ngOnInit(): void {
    this.users = this.userService.getusers()
    
  }
  register() {
    const checkEmail = this.users.findIndex((check:any)=>check.email == this.newUser.value['email'])
    if (checkEmail == -1) {
      this.users.push(this.newUser.value)
      localStorage.setItem("allUsers", JSON.stringify(this.users))
      this.routes.navigate(['/signin']);
      
    } else {
      this.message = "Email already exist. Kindly try again"
    }
    // console.log(this.users)
  }
}
