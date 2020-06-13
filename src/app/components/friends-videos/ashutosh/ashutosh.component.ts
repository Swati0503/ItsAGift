import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ashutosh',
  templateUrl: './ashutosh.component.html',
  styleUrls: ['./ashutosh.component.scss']
})
export class AshutoshComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.route.navigateByUrl('/');
  }

}
