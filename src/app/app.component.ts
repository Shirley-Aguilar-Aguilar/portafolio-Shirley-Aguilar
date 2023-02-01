import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      backgroundColor: 'black',
    })
  ),
  state(
    'close',
    style({
      zIndex:-2,
      color: 'transparent',
      backgroundColor: 'transparent',
    })
  ),
  transition('open => *', [animate('4s ease-in-out')]),
])
@Component({
  selector: 'app-root',
  template: `
    <div class="message"
         [@fadeInOut] = "isOpen? 'open': 'close'"
    >
      <section class="section-logo">
        <app-logo [hidden]="!isOpen"
        ></app-logo>
      </section>
      <section class="section-name">
        <h1>Shirley Aguilar</h1>
      </section>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]

})
export class AppComponent implements OnInit{
  title = 'my-portafolio';
  isOpen = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isOpen = !(this.isOpen);
    },5000);
  }

}




