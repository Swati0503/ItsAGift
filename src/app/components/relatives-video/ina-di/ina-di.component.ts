import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ina-di',
  templateUrl: './ina-di.component.html',
  styleUrls: ['./ina-di.component.scss']
})
export class InaDiComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.route.navigateByUrl('/');
  }

}
