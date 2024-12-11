import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../model/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl: string = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl);
  }

  createPost() {}

  deletePost() {}
}
