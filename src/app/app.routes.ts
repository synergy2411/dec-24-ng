import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ObservableDemoComponent } from './components/playground/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/playground/pipe-demo/pipe-demo.component';
import { UsersComponent } from './components/users/users.component';
import { LoginGuard } from './services/guard/login.guard';
import { loginNewGuard } from './services/guard/login-new.guard';
import { ProductsComponent } from './components/products/products.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { SpecificationComponent } from './components/products/specification/specification.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200/
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'sign-up', // http://localhost:4200/sign-up
    component: SignUpComponent,
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
    canActivate: [loginNewGuard],
  },
  {
    path: 'pipes', // http://localhost:4200/pipes
    component: PipeDemoComponent,
  },
  {
    path: 'observable', // http://localhost:4200/observable
    component: ObservableDemoComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'overview/:productId/:name', component: OverviewComponent },
      { path: 'specification', component: SpecificationComponent },
    ],
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**', // http://localhost:4200/non-existing-path
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
