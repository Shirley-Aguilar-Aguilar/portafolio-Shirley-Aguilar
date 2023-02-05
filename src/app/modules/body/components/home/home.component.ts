import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('asName') asName: ElementRef;

  ngAfterViewInit(): void {
    this.initEffect();
  }
  ngOnInit(): void {

  }



  initEffect = () => {
    const target = this.asName.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#FB2576'
    })

    writer
      .changeCursorColor('white')
      .type('Shirley Aguilar')
      .rest(5000)
      .start()

  }



}
