import { Component, EventEmitter, Output } from '@angular/core';
import { IPost } from '../../../model/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  title: string = '';
  body: string = '';

  @Output() childEvent = new EventEmitter<IPost>();

  onAddNewPost() {
    let newPost = { title: this.title, body: this.body };
    this.childEvent.emit(newPost);
    this.title = '';
    this.body = '';
  }
}
