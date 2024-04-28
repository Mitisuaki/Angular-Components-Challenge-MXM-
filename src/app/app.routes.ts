import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePage2Component } from './pages/home-page-2/home-page-2.component';

export const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"home-2", component: HomePage2Component}
];
