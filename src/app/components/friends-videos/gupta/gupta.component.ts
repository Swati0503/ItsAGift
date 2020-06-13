import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gupta',
  templateUrl: './gupta.component.html',
  styleUrls: ['./gupta.component.scss']
})
export class GuptaComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/sonal');
  }

}
