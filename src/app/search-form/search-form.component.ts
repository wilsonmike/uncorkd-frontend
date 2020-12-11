import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getSearchTerm = (form: NgForm): void => {
    console.log(form.value);

    this.router.navigate(['/home'], {
      queryParams: {
        term: form.value.search,
      },
    });
    form.reset();
  };
}
