import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userDetail:User= new User("","",0,0,"")
  
  constructor(private myPath:Router) { }

  ngOnInit(): void {
  }

  goToUrl(){
    this.myPath.navigate(["github",this.userDetail.userName])
    console.log(this.userDetail.userName)
  }

}
