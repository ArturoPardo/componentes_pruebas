import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  showDiv: boolean = false;
  cambioCheck: boolean = false;
  escribirText(ev) {
    this.text = ev.target.value;
  }

  siExiste() {
    this.showDiv = !this.showDiv;
    console.log(this.showDiv);
  }
 

  siCheck() {
    this.cambioCheck = !this.cambioCheck;
    console.log(this.cambioCheck);
  }
}
