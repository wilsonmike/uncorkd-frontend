import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [AngularFireModule.initializeApp(environment.firebase)],
  exports: [AngularFireAuthModule],
})
export class AppFirebaseModule {}
