import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { NaPageComponent } from './na-page/na-page.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { SubmitBourbonComponent } from './submit-bourbon/submit-bourbon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFormComponent } from './search-form/search-form.component';
import { SavedComponent } from './saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    NaPageComponent,
    FourZeroFourComponent,
    SubmitBourbonComponent,
    SearchFormComponent,
    SavedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    CarouselModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
