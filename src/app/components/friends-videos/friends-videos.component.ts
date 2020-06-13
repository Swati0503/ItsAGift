import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends-videos',
  templateUrl: './friends-videos.component.html',
  styleUrls: ['./friends-videos.component.scss']
})
export class FriendsVideosComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  next() {
    this.route.navigateByUrl('/dhawal');
  }

}
