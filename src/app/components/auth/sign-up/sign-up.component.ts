import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    SignUpComponent.hasExclamationValidation,
  ]);

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: this.email,
      password: this.password,
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  private static hasExclamationValidation(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamationError: true };
  }
}
