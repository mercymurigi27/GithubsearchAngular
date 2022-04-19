import { Component, OnInit } from '@angular/core';
import { GituserService } from '../gituser.service';
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  gitHubUser:User= new User("","",0,0,"")

  constructor(private receiveUserData:GituserService) { 
 
  }

  ngOnInit(): void {
    this.receiveUserData.getUserData().subscribe(function(data: any){
      this.gitHubUser.userName= data.login
      console.log(data.login)
      console.log(data.avatar_url)
      console.log(data.created_at)
      console.log(data.id)
      console.log(data.public_repos)

    })
  }

}
