import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Saved } from '../interfaces/saved';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  bourbons = [];
  saved: Saved[] = [];

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
      this.bourbons = response;
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
    console.log(this.bourbons);
  };

  editSaved = (saved: Saved): void => {
    let index = this.saved.findIndex((item) => {
      return item.img_url === saved.img_url;
    });
    if (index === -1) {
      this.saved.push(saved);
    } else {
      this.saved.splice(index, 1);
    }
    console.log(this.saved);
  };

  toggleSaved = (saved: Saved): void => {
    this.service.editSaved(saved);
  };

  //KEEP THIS
  customOptions: any = {
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
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
