import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts!: IPost[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
