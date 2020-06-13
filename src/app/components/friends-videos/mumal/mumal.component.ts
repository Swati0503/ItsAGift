import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mumal',
  templateUrl: './mumal.component.html',
  styleUrls: ['./mumal.component.scss']
})
export class MumalComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/ravi');
  }
  
}
