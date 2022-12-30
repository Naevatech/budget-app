import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoryComponent } from './category/category.component';
import { CategoryHistoryComponent } from './category-history/category-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewComponent } from './preview/preview.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    CategoryComponent,
    CategoryHistoryComponent,
    DashboardComponent,
    ViewBudgetComponent,
    PreviewComponent,
    SignupComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
