import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  public getusers(){
    return JSON.parse(localStorage["allUsers"])
  }
}
