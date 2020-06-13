import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ashu-da',
  templateUrl: './ashu-da.component.html',
  styleUrls: ['./ashu-da.component.scss']
})
export class AshuDaComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/kopal-pihu');
  }

}
