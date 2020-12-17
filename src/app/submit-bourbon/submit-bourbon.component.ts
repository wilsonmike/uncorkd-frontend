import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-submit-bourbon',
  templateUrl: './submit-bourbon.component.html',
  styleUrls: ['./submit-bourbon.component.css'],
})
export class SubmitBourbonComponent implements OnInit {
  brand = '';
  distillery = '';
  proof = '';
  upload_img = '';
  description = '';

  constructor(
    private service: ServiceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  getSubmission = (
    brand: string,
    distillery: string,
    proof: number,
    upload_img: any,
    description: string
  ): any => {
    return this.service.getSubmission(
      brand,
      distillery,
      proof,
      upload_img,
      description
    );
  };

  storeSubmission = (form: NgForm) => {
    console.log(form.value);
    this.brand = form.value;
    this.distillery = form.value;
    this.proof = form.value;
    this.upload_img = form.value;
    this.description = form.value;
    return form.value;
  };
}
