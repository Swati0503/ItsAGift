import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ravi',
  templateUrl: './ravi.component.html',
  styleUrls: ['./ravi.component.scss']
})
export class RaviComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/anu');
  }
  
}
