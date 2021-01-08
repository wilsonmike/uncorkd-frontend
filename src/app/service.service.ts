import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Saved } from './interfaces/saved';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl: string = environment.apiBaseUrl;
  saved: Saved[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  getTrending = (): any => {
    return this.http.get(`${this.baseUrl}/trending`);
  };

  getBourbons = (term: string): any => {
    return this.http.get(`${this.baseUrl}/bourbons`, {
      params: {
        term: term,
      },
    });
  };

  getFlavors = (flavor: string, proof: string): any => {
    return this.http.get(`${this.baseUrl}/flavor`, {
      params: {
        flavor: flavor,
        proof: proof,
      },
    });
  };

  editSaved = (saved: Saved) => {
    let index = this.saved.findIndex((item) => {
      return item.id === saved.id;
    });
    if (index === -1) {
      this.saved.push(saved);
    } else {
      this.saved.splice(index, 1);
    }
    console.log(this.saved);
  };

  getSaved = () => {
    return this.saved;
  };

  getPost = (
    bourbon_id: any,
    username: any,
    rating: any,
    displayName: any,
    brand: any,
    img_url: any,
    photo_url: any,
    user_comment: any
  ): any => {
    const data = {
      bourbon_id: parseInt(bourbon_id),
      username: username,
      rating: parseInt(rating),
      displayName: displayName,
      brand: brand,
      img_url: img_url,
      photo_url: photo_url,
      user_comment: user_comment,
    };
    console.log(bourbon_id, username, rating, user_comment);
    return this.http
      .post(`${this.baseUrl}/bourbons`, data)
      .subscribe((response) => {
        console.log(response);
      });
  };

  getSubmission = (
    brand: any,
    distillery: any,
    proof: any,
    upload_img: any,
    description: any
  ): any => {
    const submission = {
      brand: brand,
      distillery: distillery,
      proof: proof,
      upload_img: upload_img,
      description: description,
    };
    console.log(brand, distillery, proof, upload_img, description);
    return this.http
      .post(`${this.baseUrl}/submit`, submission)
      .subscribe((response) => {
        console.log(response);
      });
  };

  getFeed = () => {
    return this.http.get(`${this.baseUrl}/feed`);
  };
}
