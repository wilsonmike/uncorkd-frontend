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
}
