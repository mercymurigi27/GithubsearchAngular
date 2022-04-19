import { Component, OnInit } from '@angular/core';
import { GituserService } from '../gituser.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
 userRepoDetails:Repository[]=[]

  constructor(private repoData:GituserService) { }

  ngOnInit(): void {
    this.repoData.getRepo().subscribe((data)=>{
   this.userRepoDetails=data
    })
  }

}
