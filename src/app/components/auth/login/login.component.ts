import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmitForm(loginForm: NgForm) {
    console.log('Email : ', loginForm.value.email);
    console.log('Password : ', loginForm.value.password);
  }
}
