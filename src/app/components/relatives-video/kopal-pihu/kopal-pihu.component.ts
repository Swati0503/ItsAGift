import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kopal-pihu',
  templateUrl: './kopal-pihu.component.html',
  styleUrls: ['./kopal-pihu.component.scss']
})
export class KopalPihuComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/ina-di');
  }

}
