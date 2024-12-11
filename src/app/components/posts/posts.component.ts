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

  onAddNewPost(post: IPost) {
    this.postService.createPost(post).subscribe((data) => {
      this.posts.push(data);
    });
  }

  onDeletePost(postId?: string) {
    this.postService.deletePost(postId).subscribe(() => {
      const position = this.posts.findIndex((post) => post.id === postId);
      if (position >= 0) {
        this.posts.splice(position, 1);
      }
    });
  }
}
