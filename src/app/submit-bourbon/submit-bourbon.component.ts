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
  constructor(
    private service: ServiceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  getSubmission = (
    brand: any,
    distillery: any,
    proof: any,
    upload_img: any,
    description: any
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
    let brand = form.value.brand;
    let distillery = form.value.distillery;
    let proof = form.value.proof;
    let upload_img = form.value.upload_img;
    let description = form.value.description;
    this.getSubmission(brand, distillery, proof, upload_img, description);
  };
}
