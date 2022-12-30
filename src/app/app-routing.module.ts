import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersGuard } from './guards/users.guard';
import { PreviewComponent } from './preview/preview.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';

const routes: Routes = [
  {path:"", component:CategoryComponent,  canActivate:[UsersGuard]},
  {path:"create", component:BudgetComponent,  canActivate:[UsersGuard]},
  {path:"budget", component:ViewBudgetComponent,  canActivate:[UsersGuard]},
  {path:"budget", children:[
    {path:"", component:ViewBudgetComponent},
    {path:"dashboard/:id", children:[
      {path:"", component:DashboardComponent},
      {path:"details/:id/:id2", component:PreviewComponent}
    ]},
  ], canActivate:[UsersGuard]},
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},
  // {path:"dashboard", children:[
  //   {path:'', component:DashboardComponent},
  //   {path:"details/:id", component:PreviewComponent}
  // ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
