import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl: string = 'http://localhost:3000';

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
}
