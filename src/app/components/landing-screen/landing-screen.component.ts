import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {
  breakpoint: number;

  constructor() { }

  ngOnInit() {
    console.log(window.innerWidth);
    this.breakpoint = (window.innerWidth <= 786) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 786) ? 1 : 2;
  }

}
