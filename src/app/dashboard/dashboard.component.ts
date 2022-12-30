import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public activeDahboard:ActivatedRoute ) { 
  }
  public id:any = this.activeDahboard.snapshot.params['id']
  public id2:any = this.activeDahboard.snapshot.params['id']

  public budgetName:any = "";
  public budgetQty:any = "";
  public budgetCost:any = "";
  public budgetTotal:any = "";
  public budgetDate:any ="";
  public budgetAmount:any =""
  public cart:any = [];
  public cart1:any = [];

  public cartName:any = "";
  public cartQty:any = "";
  public cartCost:any = "";
  public CartTotal:any = ""
  public idUpdate:any = "";

  //dated
  public dateGet:any = [];
  public cartArr:any = [];
  public cartObj:any = {};
  public cartBudget:any = {}

  //
  public budget1:any = []
  public message1:any = ""


  ngOnInit(): void {
    console.log(this.id)
    this.cart1 = JSON.parse(localStorage.getItem("myBudget")!)
    this.cart1.map((cart:any, index:any)=>{
      if (this.id==index) {
        this.cartBudget = cart
        this.cart = cart.others
      }
    })
    // console.log(this.cartBudget)
    // let id = this.activeDahboard.snapshot.params['id']
  }
  

  addToList() {
    let cartItem ={
      budgetName:this.budgetName,
      budgetQty:this.budgetQty,
      budgetCost:this.budgetCost,
      budgetTotal:this.budgetQty*this.budgetCost,
      budgetAmount:this.cartObj.budgetDate,
      budgetDate:this.cartObj.budgetAmount,
    }
    this.cart1[this.id].others.push(cartItem);
    localStorage.setItem("myBudget", JSON.stringify(this.cart1))
    // console.log(this.budget1);

    this.budgetName=""
    this.budgetQty=""
    this.budgetCost=""

  }
  deleteCart(id:any) {
    let filteredCart:any = []
    this.cart.map((cart:any, index:any)=> {
      if (id !=index) {
        console.log(id)
        console.log(cart)
        filteredCart.push(cart)
      }
      // console.log(filteredCart)
      this.cart=filteredCart
      console.log(this.cart1[this.id].others)
      localStorage.setItem("myBudget", JSON.stringify(this.cart1))
    })
  }
  editCart(id:any, cart:any) {
    this.cartName = cart.budgetName;
    this.cartQty = cart.budgetQty;
    this.cartCost = cart.budgetCost;
    this.idUpdate = id
  }

  updateCart() {
    this.cart.map((list:any, index:any)=> {
      if (index == this.idUpdate) {
        console.log(list)
        list.budgetName = this.cartName;
        list.budgetQty = this.cartQty;
        list.budgetAmount = this.cartCost;
        list.budgetTotal = this.cartCost*this.cartQty
      }
    })
    localStorage.setItem('myBudget', JSON.stringify(this.cart1))
  }



  bought($event:any) {
    let idCheck = $event.target.value;
    const isChecked = $event.target.checked;
    console.log(idCheck, isChecked)
    this.cart.map((buy:any, index:any)=>{
      if (index==idCheck) {
        if (isChecked==true) {
            let remains= this.cartBudget.budgetAmount - buy.budgetTotal
            if (remains <= this.cartBudget.budgetAmount*0.1) {
              this.message1 ="Your budget total is less than 10%. You can't afford this boss"
              this.cartBudget.budgetAmount + 0;
              $event.target.checked = false
            }
            else{
              this.cartBudget.budgetAmount=remains
              this.message1 =""
            }
        }
        else if(isChecked==false) {
          let remains= parseInt(this.cartBudget.budgetAmount) + parseInt(buy.budgetTotal)
          this.cartBudget.budgetAmount=remains
        }
        else {
          this.cartBudget.budgetAmount = buy
        }
      }
    })
    localStorage.setItem('myBudget', JSON.stringify(this.cart1))
  }

}


