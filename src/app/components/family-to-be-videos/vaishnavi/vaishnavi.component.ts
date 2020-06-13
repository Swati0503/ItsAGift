import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaishnavi',
  templateUrl: './vaishnavi.component.html',
  styleUrls: ['./vaishnavi.component.scss']
})
export class VaishnaviComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/ashu');
  }
}
