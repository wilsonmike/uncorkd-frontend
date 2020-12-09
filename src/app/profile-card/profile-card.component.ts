import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent implements OnInit {
  @Input() user: firebase.User;
  @Output() logoutClick: EventEmitter<null> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  logout() {
    this.logoutClick.emit();
  }
}
