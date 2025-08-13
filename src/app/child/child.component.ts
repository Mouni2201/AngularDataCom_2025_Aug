import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('catchInput') userName:string;  //taking

  @Output('postLocationEmitter') LocationEmitter = new EventEmitter<string>();   //giving

  evtClick(){
    this.userName = this.userName +  "updated...";
  }

  evtPostLocation(){
    this.LocationEmitter.emit("Banglore")
  }
}
