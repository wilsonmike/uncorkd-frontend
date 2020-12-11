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

  getUser = (bourbon_id: number, username: string, rate: number) => {
    return this.service.getPost(bourbon_id, username, rate);
  };

  removeSaved = (saved: Saved) => {
    this.service.editSaved(saved);
    this.getSaved;
  };

  storeRate = (form: NgForm) => {
    console.log(form.value);
    return form.value;
  };
}
