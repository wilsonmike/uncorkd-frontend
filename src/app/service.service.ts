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
}
