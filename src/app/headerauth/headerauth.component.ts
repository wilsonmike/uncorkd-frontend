import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import firebase from 'firebase/app';
import { catchError, takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-headerauth',
  templateUrl: './headerauth.component.html',
  styleUrls: ['./headerauth.component.css']
})
export class HeaderauthComponent implements OnInit,OnDestroy {
  destroyed$: Subject<null> = new Subject();
  user$: Observable<firebase.User> = this.authService.user$;

  constructor(private authService: AuthService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  login() {
    this.authService
      .login()
      .pipe(
        catchError((error) => of(null)),
        takeUntil(this.destroyed$)
      )
      .subscribe((authState) => {
        if (authState) {
          this.snackBar.open('Welcome Back', 'OK', {
            duration: 4000,
          });
        }
      });
  }

  logout() {
    this.authService
      .logout()
      .pipe(
        catchError((error) => of(null)),
        takeUntil(this.destroyed$)
      )
      .subscribe((authState) => {
        if (authState) {
          this.snackBar.open('Come Back', 'OK', {
            duration: 4000,
          });
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}
