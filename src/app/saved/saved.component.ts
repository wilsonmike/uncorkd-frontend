import { Component, Input, OnInit } from '@angular/core';
import { Saved } from '../interfaces/saved';
import { ServiceService } from '../service.service';
import { Observable, of, Subject } from 'rxjs';
import firebase from 'firebase/app';
import { AuthService } from '../services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit {
  rating = '';
  isDisabled = false;
  user$: Observable<firebase.User> = this.authService.user$;
  @Input() bourbonRef: any;
  @Input() user: firebase.User;
  saved: Saved[] = [];

  constructor(
    private service: ServiceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.saved = this.service.getSaved();
    console.log(this.saved);
    // this.getSaved();
  }

  getSaved = () => {
    this.saved = this.service.getSaved();
  };

  getUser = (
    bourbon_id: number,
    username: string,
    rating: number,
    displayName: string,
    brand: string,
    img_url: any
  ): any => {
    return this.service.getPost(
      bourbon_id,
      username,
      rating,
      displayName,
      brand,
      img_url
    );
  };

  removeSaved = (saved: Saved) => {
    this.service.editSaved(saved);
    this.getSaved;
  };

  storeRate = (form: NgForm) => {
    console.log(form.value[1]);
    this.rating = form.value;
    return form.value;
  };
  disableButton = function () {
    this.isDisabled = true;
  };
}
