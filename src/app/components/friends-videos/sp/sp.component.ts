import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp',
  templateUrl: './sp.component.html',
  styleUrls: ['./sp.component.scss']
})
export class SpComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/ritesh');
  }

}
