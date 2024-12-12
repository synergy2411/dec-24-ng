import { Injectable } from '@angular/core';
// import { USER_DATA } from '../db/mocks';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string =
    'https://sk-dec-24-ng-default-rtdb.firebaseio.com/userdata.json';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserdata(): Observable<User[]> {
    // return USER_DATA;
    return this.http.get<User[]>(
      `${this.baseUrl}?auth=${this.authService.getToken()}`
    );
  }
}
