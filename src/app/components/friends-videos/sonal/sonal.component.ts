import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sonal',
  templateUrl: './sonal.component.html',
  styleUrls: ['./sonal.component.scss']
})
export class SonalComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/gunjan');
  }

}
