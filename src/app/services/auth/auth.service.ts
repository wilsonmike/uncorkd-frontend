import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: BehaviorSubject<
    Observable<firebase.User>
  > = new BehaviorSubject(null);
  user$: Observable<firebase.User> = this.user
    .asObservable()
    .pipe(
      switchMap(
        (authenticatedUser: Observable<firebase.User>) => authenticatedUser
      )
    );

  constructor(private auth: AngularFireAuth) {
    this.user.next(auth.authState);
  }
  login(): Observable<firebase.auth.UserCredential> {
    return from(
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    );
  }
  logout(): Observable<void> {
    return from(this.auth.signOut());
  }
}
