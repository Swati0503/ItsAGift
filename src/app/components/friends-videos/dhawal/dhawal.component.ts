import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dhawal',
  templateUrl: './dhawal.component.html',
  styleUrls: ['./dhawal.component.scss']
})
export class DhawalComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/sp');
  }
}
