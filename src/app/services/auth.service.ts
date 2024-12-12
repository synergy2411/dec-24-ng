import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCj5Cu46Bbsbgggui_JVwnAjFHm6y6EmJs',
  authDomain: 'sk-dec-24-ng.firebaseapp.com',
});

const firebaseAuth = getAuth(firebaseApp);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async onUserSignUp(email: string, password: string) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(userCredentials);
    } catch (err) {
      console.error(err);
    }
  }

  onUserLogin(email: string, password: string) {}
}
