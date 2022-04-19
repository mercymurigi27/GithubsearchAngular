import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GituserService {
  myUserName:string="mercymurigi27"

  constructor( private userData:HttpClient) {
  }
  
  changeMyUserName(nameTyped:string){
    this.myUserName=nameTyped
  }

  getUserData(){
    return this.userData.get<any>('https://api.github.com/users/'+ this.myUserName)
  }


  getRepo(){
    return this.userData.get<any>('https://api.github.com/users/'+ this.myUserName +'/repos')
  }

}

