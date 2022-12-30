import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public userGet:RegisterService, public routes:Router) { }

  public users:any = []
  public email:any = "";
  public password:any = "";
  // public uniqueID:any ="";
  public message:any = ""
  ngOnInit(): void {
    this.users = this.userGet.getusers()
  }
  //localStorage.setItem("userdetails", JSON.stringify(user))
  login(){
    console.log(this.users)
    const userExit = this.users.find((user:any, index:any)=>user.email==this.email && user.password==this.password)
    console.log(userExit)
    if (userExit ) {
      // this.uniqueID = this.users[userExit].uniqueID
      localStorage.setItem("activUser", JSON.stringify(userExit))
      this.routes.navigate([''])
    }
    else {
      this.message = "Invalid logins details"
    }
  }
}
