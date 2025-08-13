import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataCom_2025_Aug';

  firstName = "John";

  johnLocation = " ";

  getLocation(value:any){
    console.log("trigger from the child");
    console.log(value);
    this.johnLocation = value;
  }
}
