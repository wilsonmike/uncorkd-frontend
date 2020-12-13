import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Saved } from './interfaces/saved';

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

  getFlavors = (flavor: string): any => {
    return this.http.get(`${this.baseUrl}/flavor`, {
      params: {
        flavor: flavor,
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
    img_url: any
  ): any => {
    const data = {
      bourbon_id: parseInt(bourbon_id),
      username: username,
      rating: parseInt(rating),
      displayName: displayName,
      brand: brand,
      img_url: img_url,
    };
    console.log(bourbon_id, username, rating);
    return this.http
      .post(`${this.baseUrl}/bourbons`, data)
      .subscribe((response) => {
        console.log(response);
      });
  };

  // addPerson(person:Person): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}
  //   const body=JSON.stringify(person);
  //   console.log(body)
  //   return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  // }
}
