import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bourbons = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getBourbons();
    console.log(this.getBourbons());
  }

  getBourbons = () => {
    this.service.getBourbons().subscribe((response) => {
      this.bourbons = response;
      console.log(this.bourbons);
    });
  };

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    navText: ['<', '>'],
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
