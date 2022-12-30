import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.css']
})
export class ViewBudgetComponent implements OnInit {

  constructor() { }
  public budgetList:any = [];
  public budgetList1:any = []
  public activeUser:any = {}

  ngOnInit(): void {
    this.activeUser = JSON.parse(localStorage.getItem("activUser") !)
    this.budgetList1 = JSON.parse(localStorage.getItem('myBudget') !)
    console.log(this.activeUser.uniqueID)
    // console.log(this.budgetList)
    this.budgetList = this.budgetList1.filter((check:any)=>check.userActive == this.activeUser.uniqueID)
    // console.log(checkAllIndex)

  }

  createItemBudget(id:any) {
    console.log(id)
    
  }

}
