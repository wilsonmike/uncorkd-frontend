import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newbie',
  templateUrl: './newbie.component.html',
  styleUrls: ['./newbie.component.css'],
})
export class NewbieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  panelOpenState = false;
  customOptions: any = {
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
