import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { ReposComponent } from './repos/repos.component';
import { FontDirective } from './font.directive';
import { DayCountPipe } from './day-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    UserFormComponent,
    ReposComponent,
    FontDirective,
    DayCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
