import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GituserService } from '../gituser.service';
import { User } from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  gitHubUser:User= new User("","",0,0,"")
  userProfile:any

  constructor(private receiveUserData:GituserService, private userData:ActivatedRoute) { 
 
  }

  ngOnInit(): void {
   this.userProfile=this.userData.snapshot.paramMap.get("userName")
   this.receiveUserData.changeMyUserName(this.userProfile)


    this.receiveUserData.getUserData().subscribe((data: any) =>{
      this.gitHubUser.userName= data.login
      this.gitHubUser.userPic= data.avatar_url
      this.gitHubUser.userId= data.id
      this.gitHubUser.repoCount= data.public_repos
      this.gitHubUser.dateJoined= data.created_at
  
    })
  }

}
