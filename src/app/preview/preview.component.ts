import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(public activeRoute:ActivatedRoute) { 
    console.log(this.activeRoute)
  }
  public id2:any = this.activeRoute.snapshot.params['id2']
  public cart1:any = [];
  public cartObject:any = {}

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id']
    let id2 = this.activeRoute.snapshot.params['id2']
    this.cart1 = JSON.parse(localStorage.getItem("myBudget")!)
    this.cartObject = this.cart1[id2].others[id]
    // console.log(id)
    
  }

}
