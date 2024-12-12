import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

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
    SignUpComponent.hasExclamationValidator,
  ]);
  cnfPassword = new FormControl('', [SignUpComponent.confirmPasswordValidator]);

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      email: this.email,
      password: this.password,
      cnfPassword: this.cnfPassword,
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.authService.onUserSignUp(
      this.signUpForm.value.email,
      this.signUpForm.value.password
    );
  }

  private static hasExclamationValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamationError: true };
  }

  private static confirmPasswordValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    let result = null;
    if (control.root && control.root.value) {
      if (control.value !== control.root.value.password) {
        result = { cnfPasswordError: true };
      }
    }
    return result;
  }
}
