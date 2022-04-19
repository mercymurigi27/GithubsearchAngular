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
    this.receiveUserData.getUserData().subscribe((data: any) =>{
      this.gitHubUser.userName= data.login
      this.gitHubUser.userPic= data.avatar_url
      this.gitHubUser.userId= data.id
      this.gitHubUser.repoCount= data.public_repos
      this.gitHubUser.dateJoined= data.created_at
  
    })
  }

}
