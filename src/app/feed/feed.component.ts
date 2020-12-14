import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  userFeed: any = [];
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getFeed().subscribe((response) => {
      this.userFeed = response;
      console.log(this.userFeed);
    });
  }
}
