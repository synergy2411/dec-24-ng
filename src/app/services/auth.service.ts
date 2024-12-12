import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Observable } from 'rxjs';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCj5Cu46Bbsbgggui_JVwnAjFHm6y6EmJs',
  authDomain: 'sk-dec-24-ng.firebaseapp.com',
});

const firebaseAuth = getAuth(firebaseApp);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';

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

  onUserLogin(email: string, password: string): Observable<{ token: string }> {
    return new Observable((observer) => {
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredentials) => {
          userCredentials.user.getIdToken().then((token) => {
            console.log('TOKEN : ', token);
            this.token = token;
            observer.next({ token });
            observer.complete();
          });
        })
        .catch((err) => {
          observer.error({ errorMessage: err.message });
        });
    });
  }

  isAuthenticated() {
    return this.token != '';
  }

  getToken() {
    return this.token;
  }
}
