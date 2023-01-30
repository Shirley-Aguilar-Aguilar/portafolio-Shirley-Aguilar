import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'my-portafolio';


  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

}




