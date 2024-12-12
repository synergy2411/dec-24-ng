import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { LifeCycleDemoComponent } from './components/playground/life-cycle-demo/life-cycle-demo.component';
import { DirectiveDemoComponent } from './components/playground/directive-demo/directive-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/playground/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ObservableDemoComponent } from './components/playground/observable-demo/observable-demo.component';
import { ObservableSubjectDemoComponent } from './components/playground/observable-subject-demo/observable-subject-demo.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { APP_ROUTES } from './app.routes';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { SpecificationComponent } from './components/products/specification/specification.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImageComponent,
    LifeCycleDemoComponent,
    DirectiveDemoComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    SignUpComponent,
    ObservableDemoComponent,
    ObservableSubjectDemoComponent,
    PostsComponent,
    PostFormComponent,
    MainNavigationComponent,
    ProductsComponent,
    OverviewComponent,
    SpecificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
