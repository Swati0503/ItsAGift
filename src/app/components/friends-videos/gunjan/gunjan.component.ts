import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gunjan',
  templateUrl: './gunjan.component.html',
  styleUrls: ['./gunjan.component.scss']
})
export class GunjanComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/mumal');
  }

}
