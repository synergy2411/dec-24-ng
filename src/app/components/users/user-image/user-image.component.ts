import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css',
  standalone: false,
})
export class UserImageComponent {
  @Input() user: any;
}
