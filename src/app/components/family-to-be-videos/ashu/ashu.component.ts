import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ashu',
  templateUrl: './ashu.component.html',
  styleUrls: ['./ashu.component.scss']
})
export class AshuComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.route.navigateByUrl('/');
  }

}
