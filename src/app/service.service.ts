import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Saved } from './interfaces/saved';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl: string = 'http://localhost:3000';
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

  getFeed = () => {
    return this.http.get(`${this.baseUrl}/feed`);
  };
}
