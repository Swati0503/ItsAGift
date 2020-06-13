import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-to-be-videos',
  templateUrl: './family-to-be-videos.component.html',
  styleUrls: ['./family-to-be-videos.component.scss']
})
export class FamilyToBeVideosComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/vaishnavi');
  }
}
