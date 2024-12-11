import { Injectable } from '@angular/core';
import { USER_DATA } from '../db/mocks';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string =
    'https://sk-dec-24-ng-default-rtdb.firebaseio.com/userdata.json';

  constructor(private http: HttpClient) {}

  getUserdata(): Observable<User[]> {
    // return USER_DATA;
    return this.http.get<User[]>(this.baseUrl);
  }
}
