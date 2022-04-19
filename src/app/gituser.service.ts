import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GituserService {

  constructor( private userData:HttpClient) {}

  getUserData(){
    return this.userData.get<any>('https://api.github.com/users/Muvkin')
  }

}
