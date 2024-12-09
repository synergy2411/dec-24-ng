import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { LifeCycleDemoComponent } from './components/playground/life-cycle-demo/life-cycle-demo.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserInfoComponent, UserImageComponent, LifeCycleDemoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
