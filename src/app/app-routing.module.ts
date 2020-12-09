import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NaPageComponent } from './na-page/na-page.component';
import { SavedComponent } from './saved/saved.component';
import { SubmitBourbonComponent } from './submit-bourbon/submit-bourbon.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'four-zero-four', component: FourZeroFourComponent },
  { path: 'submit-bourbon', component: SubmitBourbonComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'na-page', component: NaPageComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: FourZeroFourComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
