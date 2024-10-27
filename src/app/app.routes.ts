import { Routes } from '@angular/router';
import { HeroDetailComponent } from './views/hero-detail/hero-detail.component';

export const routes: Routes = [
  {
    path: 'hero/:id',
    component: HeroDetailComponent,
  },
];
