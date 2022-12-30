import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor() { }
  public budgetDate:any = "";
  public budgetAmount:any = "";
  public budgetList:any = [];
  public id:any = "";
  public userLoginID:any = "";
  public message:any = ""

  ngOnInit(): void {
    this.budgetList = JSON.parse(localStorage.getItem('myBudget') !)
   
    if (!this.budgetList) {
      this.budgetList = []
    }

    this.userLoginID = JSON.parse(localStorage.getItem('activUser') !)
    console.log(this.userLoginID)
  }

  createtBudget() {
    let budget = {
      budgetDate:this.budgetDate,
      budgetAmount:this.budgetAmount,
      userActive:this.userLoginID.uniqueID,
      others:[]
      
    }
    this.budgetList.push(budget)
    localStorage.setItem("myBudget", JSON.stringify(this.budgetList))
    this.message = "Budget created successfully"
    this.budgetDate = ""
    this.budgetAmount = ""

    
    

  }
}
