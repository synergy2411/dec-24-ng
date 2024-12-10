import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css',
  standalone: false,
})
export class UserImageComponent {
  @Input() user!: User;

  @Output() childEvent = new EventEmitter<User>();

  btnClick() {
    this.childEvent.emit(this.user);
  }
}
