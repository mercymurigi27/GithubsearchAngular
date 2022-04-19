import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path:"", component:UserFormComponent},
  { path:"github/;searchedName", component:GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
