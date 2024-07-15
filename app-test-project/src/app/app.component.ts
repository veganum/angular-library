import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardUserComponent, TopButtonComponent } from '@jfn/ngx-components';
import { CardUser, UserName } from '../../../library-project/dist/jfn/ngx-components/lib/components/card-user/models/card-user';
import { UserResponse } from './models/userResponse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopButtonComponent, CardUserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient]
})
export class AppComponent implements OnInit {
  title = 'app-test-project';

  public userList: CardUser[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.http
      .get<UserResponse>('../assets/persons.json')
      .subscribe((response: UserResponse) => {
        this.userList = response.results;
      });
  }

  public onUserCheck(userName:UserName):void{
    console.log({userName});

  }
}
