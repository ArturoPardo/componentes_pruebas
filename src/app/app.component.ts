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

 

mios: Array<{ nombre: string; apellidos:string;}> =[
  { nombre: 'Arturo', apellidos: '😀' },
  { nombre: 'Antonia', apellidos: '😂' },

];
emojis: Array<{ text: string; icon: string }> = [
  { text: 'normal', icon: '😀' },
  { text: 'risas', icon: '😂' },
  { text: 'lol', icon: '🤣' },
  { text: 'smile', icon: '😃' },
  { text: 'putada', icon: '😅' },
  { text: 'blink', icon: '😉' },
  { text: 'happy', icon: '😊' },
];



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
