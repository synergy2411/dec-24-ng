import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css',
  standalone: false,
})
export class UserImageComponent {
  @Input() user: any;

  @Output() childEvent = new EventEmitter();

  btnClick() {
    this.childEvent.emit(this.user);
  }
}
