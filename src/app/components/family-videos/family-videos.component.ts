import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family-videos',
  templateUrl: './family-videos.component.html',
  styleUrls: ['./family-videos.component.scss']
})
export class FamilyVideosComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.route.navigateByUrl('/');
  }

}
