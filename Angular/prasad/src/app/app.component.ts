import { Component } from '@angular/core';
import { AppServices } from './services/app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public users:any =[];

  constructor(private appservices: AppServices){

  }
  fechUsers(){
    this.appservices.getUsers().subscribe(
      res => {
        this.users = res;
      }
    )
  }
}
