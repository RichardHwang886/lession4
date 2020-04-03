import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  abcd = 'this is a sample';

  getV(event){
  console.log("AppComponent -> getV -> event", event)

  }
}
