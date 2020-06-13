import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ritesh',
  templateUrl: './ritesh.component.html',
  styleUrls: ['./ritesh.component.scss']
})
export class RiteshComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/gupta');
  }

}
