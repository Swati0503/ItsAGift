import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anu',
  templateUrl: './anu.component.html',
  styleUrls: ['./anu.component.scss']
})
export class AnuComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/ashutosh');
  }
}
