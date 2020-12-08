import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bourbons = [];

  constructor(private service: ServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      let term = response.get('term');
      console.log(term);
      if (term) {
        this.getBourbons(term);
      } else {
        this.getTrending();
      }
    });
  }

  getBourbons = (term: string) => {
    this.service.getBourbons(term).subscribe((response) => {
      console.log(response);
    });
  };

  getTrending = () => {
    this.service.getTrending().subscribe((response) => {
      this.bourbons = response;
      console.log(this.bourbons);
    });
  };

  getFlavors = (flavor: string) => {
    console.log('clicked');
    this.service.getFlavors(flavor).subscribe((response) => {
      this.bourbons = response;
    });
  };

  //KEEP THIS
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
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
