import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatives-video',
  templateUrl: './relatives-video.component.html',
  styleUrls: ['./relatives-video.component.scss']
})
export class RelativesVideoComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/ashu-da');
  }

}
